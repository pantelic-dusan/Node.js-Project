"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const BodyParser = require("body-parser");
const score_controller_1 = require("./controllers/score.controller");
const app = new app_1.App({
    port: 8000,
    controllers: [
        new score_controller_1.ScoreController()
    ],
    middlewares: [
        BodyParser.json(),
        BodyParser.urlencoded({ extended: true })
    ]
});
app.start();
//# sourceMappingURL=index.js.map