import { LandsService } from './lands.service';
export declare class LandsController {
    private readonly landsService;
    constructor(landsService: LandsService);
    findAll(): Promise<number>;
    findAllSavedLand(): Promise<string[]>;
    loadHistorico(): Promise<any>;
}
