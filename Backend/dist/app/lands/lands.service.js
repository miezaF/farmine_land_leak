"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const upload_service_1 = require("../upload/upload.service");
const fs = require("fs");
const contracts_1 = require("../../contracts");
const constants_1 = require("../../constants");
const ethers_1 = require("ethers");
let LandsService = class LandsService {
    constructor(prisma, uploadService) {
        this.prisma = prisma;
        this.uploadService = uploadService;
    }
    async loadHistorico() {
        const pathName = 'src/constants/landsSaved.json';
        if (!fs.existsSync(pathName)) {
            fs.writeFileSync(pathName, JSON.stringify([]));
            return [];
        }
        const file = JSON.parse(fs.readFileSync(pathName, 'utf8'));
        return file;
    }
    async saveHistorico(historico) {
        const pathName = 'src/constants/landsSaved.json';
        fs.writeFileSync(pathName, JSON.stringify(historico, null, 2));
    }
    async findAll() {
        const lands = await this.prisma.house.findMany();
        await Promise.all(lands.map(async (land) => {
            const nameJson = await this.parseString(land.name);
            if (nameJson.landzone >= 55)
                return;
            const pathname = nameJson.landzone + nameJson.landplot;
            return await this.uploadService.saveJsonFile(land.json_data, pathname);
        }));
        return lands.length;
    }
    async getFilesBySize(files, sizeCodes) {
        const filteredFiles = files.filter((file) => {
            const match = file.match(/(\d{2})(?=\.\w+$)/);
            const fileCode = match ? match[1] : null;
            return sizeCodes.includes(fileCode);
        });
        if (filteredFiles.length === 0) {
            throw new common_1.HttpException('Todos os arquivos desse tamanho já foram sorteados.', common_1.HttpStatus.BAD_REQUEST);
        }
        return filteredFiles;
    }
    async getRandomFile(files) {
        const randomIndex = Math.floor(Math.random() * files.length);
        return files[randomIndex];
    }
    async getAvailableFiles(historico, allFiles) {
        const sortedFiles = historico.map((entry) => {
            const parts = entry.split(' | ');
            const jsonLink = parts
                .find((part) => part.startsWith('json:'))
                .split('json: ')[1];
            return jsonLink;
        });
        const availableFiles = allFiles.filter((file) => !sortedFiles.includes(file));
        if (availableFiles.length === 0) {
            throw new common_1.HttpException('Todos os arquivos já foram sorteados.', common_1.HttpStatus.BAD_REQUEST);
        }
        return availableFiles;
    }
    async extractCategoryFromUrl(url) {
        const parts = url.split('/');
        const filename = parts.pop();
        const name = filename.slice(0, -5);
        return name;
    }
    async raffleLand(payload) {
        try {
            const privateKey = process.env.PRIVATE_KEY;
            const signer = new ethers_1.ethers.Wallet(privateKey);
            const provider = new ethers_1.ethers.JsonRpcProvider('https://polygon.llamarpc.com');
            const newSigner = signer.connect(provider);
            const landsContract = contracts_1.LandsAbi__factory.connect(constants_1.landsAddress, newSigner);
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
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAllSavedLand() {
        try {
            const pathName = './metadata/collection/land/landspot/';
            const prodLink = 'https://api.farmine.land/metadata/collection/land/landspot/';
            const files = fs.readdirSync(pathName);
            console.log(files.map((file) => prodLink + file).length);
            const allSavedFiles = files.map((file) => prodLink + file);
            if (allSavedFiles.length === 0) {
                throw new Error('Não há jsons salvos');
            }
            return allSavedFiles;
        }
        catch (error) {
            throw new Error(`Não foi possível ler o diretório: ${error.message}`);
        }
    }
    async parseString(input) {
        const pairs = input.split(',');
        const result = pairs.reduce((acc, pair) => {
            const [key, value] = pair.split(':');
            acc[key] = value;
            return acc;
        }, {});
        return result;
    }
};
LandsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        upload_service_1.UploadService])
], LandsService);
exports.LandsService = LandsService;
//# sourceMappingURL=lands.service.js.map