import * as http from "http"
import { inject, injectable } from "inversify";
import { IpConfig } from "../model/ip.config";
import TYPES from "../types";
import { ConfigServiceImpl } from "./config";
export interface IpConfigService {
    fetchConfigs(): Promise<IpConfig[]>
}

@injectable()
export class IpConfigServiceImpl implements IpConfigService {

    constructor(
        @inject(TYPES.ConfigService)
        private configService : ConfigServiceImpl
    ){}
    public fetchConfigs(): Promise<IpConfig[]> {
        const ipConfigDomain = this.configService.IP_CONFIG_DOMAIN;
        return new Promise((resolve, reject) => {
            http.get(`${ipConfigDomain}/ip-configs`, (res: http.IncomingMessage) => {
                let data = ""
                res.on("data", (chunk) => {
                    data += chunk;
                });
                res.on("end", () => {
                    resolve(JSON.parse(data));
                });
            }).on("error", (err) => {
                reject(err.message)
            });

        });
    }
}