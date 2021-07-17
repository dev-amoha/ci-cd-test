import { Container } from "inversify";
import { LoggerMiddleware } from "../controller/middleware";
import { ConfigServiceImpl } from "./services/config";
import { HostingOptimizerService, HostingOptimizerServiceImpl } from "./services/hosting.optimizer.service";
import { IpConfigService, IpConfigServiceImpl } from "./services/ip.config.service";
import TYPES from "./types";

let container = new Container();

container.bind<HostingOptimizerService>(TYPES.HostingOptimizerService).to(HostingOptimizerServiceImpl);
container.bind<IpConfigService>(TYPES.IpConfigService).to(IpConfigServiceImpl);
container.bind(TYPES.ConfigService).to(ConfigServiceImpl).inSingletonScope();
container.bind<LoggerMiddleware>("logger")
         .to(LoggerMiddleware);


export default container;