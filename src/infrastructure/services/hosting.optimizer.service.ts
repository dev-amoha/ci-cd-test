import { inject, injectable } from "inversify";
import { IpConfig } from "../model/ip.config";
import TYPES from "../types";
import { ConfigServiceImpl } from "./config";
import { IpConfigService } from "./ip.config.service";

export interface HostingOptimizerService {
    fetchBunchOfHostName(): Promise<string[]>;
}

@injectable()
export class HostingOptimizerServiceImpl implements HostingOptimizerService {

    constructor(
        @inject(TYPES.IpConfigService)
        private ipConfigService: IpConfigService,
        @inject(TYPES.ConfigService)
        private configService : ConfigServiceImpl,
    ) { }

    public async fetchBunchOfHostName(): Promise<string[]> {
        const threshold = this.configService.THREASHOLD;
        const configs = await this.ipConfigService.fetchConfigs();
        const bunchOfConfigs = this.filterValidConfigs(configs,threshold)
        return bunchOfConfigs.map(config => config.hostname);
    }

    private filterValidConfigs(configs: IpConfig[], threshold: number): IpConfig[] {
        return configs.filter((ip) => this.filterActiveConfigs(ip, threshold));
    }

    private filterActiveConfigs(configs: IpConfig, x: number): boolean {
        let [_, __, node] = configs.hostname.split("-");

        if (isNaN(+node)) {
            return false;
        }

        return +node <= x;
    }
}