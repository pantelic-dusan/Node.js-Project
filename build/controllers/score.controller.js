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
        this.router.get(this.path + '/:username', this.getScoresByUsername.bind(this));
        this.router.get(this.path + '/:startDate&:endDate', this.getScoresByDateRange.bind(this));
        this.router.post(this.path, this.postScore.bind(this));
        this.router.put(this.path + '/:_id', this.putScore.bind(this));
        this.router.delete(this.path + '/:_id', this.deleteScore.bind(this));
    }
    async getScores(req, res) {
        await this.mongoDBService.connect();
        let scores = await this.mongoDBService.find('scores');
        this.mongoDBService.disconnect();
        res.send(scores);
    }
    async getScoresByUsername(req, res) {
        console.log('edfg');
        await this.mongoDBService.connect();
        let scores = await this.mongoDBService.find('scores', { username: req.params.username });
        this.mongoDBService.disconnect();
        res.send(scores);
    }
    async getScoresByDateRange(req, res) {
        await this.mongoDBService.connect();
        console.log('edfg');
        let scores = await this.mongoDBService.find('scores', {
            date: {
                $gte: req.params.startDate,
                $lte: req.params.endDate
            }
        });
        this.mongoDBService.disconnect();
        res.send(scores);
    }
    async postScore(req, res) {
        await this.mongoDBService.connect();
        await this.mongoDBService.insert('scores', {
            username: req.body.username,
            score: req.body.score,
            date: new Date()
        });
        this.mongoDBService.disconnect();
        res.send('Success');
    }
    async putScore(req, res) {
        await this.mongoDBService.connect();
        await this.mongoDBService.update('scores', {
            _id: parseInt(req.params._id)
        }, {
            username: req.body.username,
            score: req.body.score,
            date: new Date()
        });
        this.mongoDBService.disconnect();
        res.send('Success');
    }
    async deleteScore(req, res) {
        await this.mongoDBService.connect();
        await this.mongoDBService.delete('users', { _id: parseInt(req.params._id) });
        this.mongoDBService.disconnect();
        res.send('Success');
    }
}
exports.ScoreController = ScoreController;
//# sourceMappingURL=score.controller.js.map