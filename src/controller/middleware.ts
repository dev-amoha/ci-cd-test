import { BaseMiddleware } from "inversify-express-utils";
import { injectable,inject } from "inversify";

@injectable()
export class LoggerMiddleware extends BaseMiddleware {
    public handler(
        req: any,
        res: any,
        next: any
    ) {
        
        res.send("In the middle ware")
        next();
    }
}