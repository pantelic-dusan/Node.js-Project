"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
class App {
    constructor(appInit) {
        this.app = Express();
        // Enables CORS
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
            next();
        });
        this.port = appInit.port;
        this.middlewares(appInit.middlewares);
        this.routes(appInit.controllers);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log('--------------------------------');
            console.log(`App listening on the http://localhost:${this.port}`);
            console.log('--------------------------------');
        });
    }
    routes(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    middlewares(middlewares) {
        middlewares.forEach((middleware) => {
            this.app.use(middleware);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map