import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UploadService } from '../upload/upload.service';
import * as fs from 'fs';
import { RaffleDto } from './dto/raffle.dto';
import { LandsAbi__factory } from 'src/contracts';
import { landsAddress } from 'src/constants';
import { ethers } from 'ethers';

@Injectable()
export class LandsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly uploadService: UploadService,
  ) {}

  async loadHistorico() {
    const pathName = 'src/constants/landsSaved.json';
    if (!fs.existsSync(pathName)) {
      fs.writeFileSync(pathName, JSON.stringify([]));
      return [];
    }
    const file = JSON.parse(fs.readFileSync(pathName, 'utf8'));
    return file;
  }

  async saveHistorico(historico: string[]) {
    const pathName = 'src/constants/landsSaved.json';
    fs.writeFileSync(pathName, JSON.stringify(historico, null, 2));
  }

  async findAll() {
    const lands = await this.prisma.house.findMany();
    await Promise.all(
      lands.map(async (land) => {
        const nameJson = await this.parseString(land.name);
        if (nameJson.landzone >= 55) return;
        const pathname = nameJson.landzone + nameJson.landplot;
        return await this.uploadService.saveJsonFile(land.json_data, pathname);
      }),
    );
    return lands.length;
  }

  async getFilesBySize(files: string[], sizeCodes: string[]) {
    const filteredFiles = files.filter((file) => {
      const match = file.match(/(\d{2})(?=\.\w+$)/);
      const fileCode = match ? match[1] : null;
      return sizeCodes.includes(fileCode);
    });
    if (filteredFiles.length === 0) {
      throw new HttpException(
        'Todos os arquivos desse tamanho já foram sorteados.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return filteredFiles;
  }

  async getRandomFile(files: string[]) {
    const randomIndex = Math.floor(Math.random() * files.length);
    return files[randomIndex];
  }

  async getAvailableFiles(historico: string[], allFiles: string[]) {
    const sortedFiles = historico.map((entry) => {
      const parts = entry.split(' | ');
      const jsonLink = parts
        .find((part) => part.startsWith('json:'))
        .split('json: ')[1];
      return jsonLink;
    });
    const availableFiles = allFiles.filter(
      (file) => !sortedFiles.includes(file),
    );
    if (availableFiles.length === 0) {
      throw new HttpException(
        'Todos os arquivos já foram sorteados.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return availableFiles;
  }

  async extractCategoryFromUrl(url: string) {
    const parts = url.split('/');
    const filename = parts.pop();
    const name = filename.slice(0, -5);
    return name;
  }

  async raffleLand(payload: RaffleDto) {
    try {
      const privateKey = process.env.PRIVATE_KEY;
      const signer = new ethers.Wallet(privateKey);
      const provider = new ethers.JsonRpcProvider(
        'https://polygon.llamarpc.com',
      );
      const newSigner = signer.connect(provider);
      const landsContract = LandsAbi__factory.connect(landsAddress, newSigner);
      const address = await landsContract.ownerOf(payload.uriToken);
      if (address !== payload.address) {
        throw new Error('Is not the owner of the tokenId');
      }
      const tokenUri = await landsContract.tokenURI(payload.uriToken);
      const size = await this.extractCategoryFromUrl(tokenUri);
      const files = await this.findAllSavedLand();
      const categories = {
        large: ['01', '02'],
        med: ['03', '04', '05', '06'],
        small: ['07', '08', '09', '10', '11'],
      };
      const sizeCodes = categories[size];
      const historico = await this.loadHistorico();
      const availFiles = await this.getAvailableFiles(historico, files);
      const filteredFiles = await this.getFilesBySize(availFiles, sizeCodes);
      const randomFile = await this.getRandomFile(filteredFiles);

      const tx = await landsContract.setTokenURI(payload.uriToken, randomFile);
      const tx2 = await tx.wait(1);

      const novoItem = `tokenId: ${payload.uriToken} | size: ${size} | json: ${randomFile}`;
      historico.push(novoItem);
      this.saveHistorico(historico);

      return tx2.hash;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAllSavedLand() {
    try {
      const pathName = './metadata/collection/land/landspot/';
      const prodLink =
        'https://api.farmine.land/metadata/collection/land/landspot/';
      const files = fs.readdirSync(pathName);
      console.log(files.map((file) => prodLink + file).length);
      const allSavedFiles = files.map((file) => prodLink + file);
      if (allSavedFiles.length === 0) {
        throw new Error('Não há jsons salvos');
      }
      return allSavedFiles;
    } catch (error) {
      throw new Error(`Não foi possível ler o diretório: ${error.message}`);
    }
  }

  async parseString(input: string) {
    const pairs = input.split(',');
    const result = pairs.reduce((acc, pair) => {
      const [key, value] = pair.split(':');
      acc[key] = value;
      return acc;
    }, {});
    return result as any;
  }
}
