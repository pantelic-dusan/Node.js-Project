"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var App = /** @class */ (function () {
    function App(appInit) {
        this.app = Express();
        this.port = appInit.port;
        this.routes(appInit.controllers);
        this.middlewares(appInit.middlewares);
    }
    App.prototype.start = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('--------------------------------');
            console.log("App listening on the http://localhost:" + _this.port);
            console.log('--------------------------------');
        });
    };
    App.prototype.routes = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this.app.use('/', controller.router);
        });
    };
    App.prototype.middlewares = function (middlewares) {
        var _this = this;
        middlewares.forEach(function (middleware) {
            _this.app.use(middleware);
        });
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map