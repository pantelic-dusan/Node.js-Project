"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var BodyParser = require("body-parser");
// import { ScoreController } from './controller/score.controller'
var app = new app_1.App({
    port: 8000,
    controllers: [
    // new ScoreController()
    ],
    middlewares: [
        BodyParser.json(),
        BodyParser.urlencoded({ extended: true })
    ]
});
app.start();
//# sourceMappingURL=index.js.map