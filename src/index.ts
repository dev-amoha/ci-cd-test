import * as bodyParser from 'body-parser';
import "reflect-metadata";

import { InversifyExpressServer } from 'inversify-express-utils';
import "./controller/hosting.optimizer.controller";
import container from './infrastructure/container';



let server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended : true
    }))
});

let app = server.build();
app.listen(4000);