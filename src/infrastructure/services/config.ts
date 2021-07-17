import { injectable } from "inversify";


@injectable()
export class ConfigServiceImpl {
 public readonly IP_CONFIG_DOMAIN = process.env.IP_CONFIG_DOMAIN
 public readonly THREASHOLD = Number(process.env.THRESHOLD) || 1
 constructor(){}
}