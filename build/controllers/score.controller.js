"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const mongodb_service_1 = require("../services/mongodb.service");
class ScoreController {
    constructor() {
        this.path = '/scores';
        this.router = Express.Router();
        this.mongoDBService = new mongodb_service_1.MongoDBService('mongodb://root:password@localhost:27017', 'tetris_scores');
        this.initRoutes();
    }
    initRoutes() {
        this.router.get(this.path, this.getScores.bind(this));
    }
    async getScores(req, res) {
        await this.mongoDBService.connect();
        let scores = await this.mongoDBService.find('users');
        this.mongoDBService.disconnect();
        res.send(scores);
    }
}
exports.ScoreController = ScoreController;
//# sourceMappingURL=score.controller.js.map