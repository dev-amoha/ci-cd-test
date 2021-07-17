import { interfaces, controller, httpGet } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../infrastructure/types";
import { HostingOptimizerService } from "../infrastructure/services/hosting.optimizer.service";
import { LoggerMiddleware } from "./middleware";

@controller("/api")
export class FooController implements interfaces.Controller {
    constructor(@inject(TYPES.HostingOptimizerService)
    private hostingOptimizer: HostingOptimizerService,
    ) { }

    @httpGet("/hostname", "logger")
    @httpGet("/host")
    public async fetchHostName(): Promise<any> {
        // return this.hostingOptimizer.fetchBunchOfHostName();
        return "Hello World";
    }

}

function middleWare() {

}