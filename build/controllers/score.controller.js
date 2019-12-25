"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var score_1 = require("../models/score");
var ScoreController = /** @class */ (function () {
    function ScoreController() {
        this.path = '/scores';
        this.router = Express.Router();
        this.initRoutes();
    }
    ScoreController.prototype.initRoutes = function () {
        this.router.get(this.path, this.getScores);
    };
    ScoreController.prototype.getScores = function (req, res) {
        var score1 = new score_1.Score(1, 'Player 1', 100);
        var score2 = new score_1.Score(2, 'Player 2', 200);
        var scores = [score1, score2];
        res.send(scores);
    };
    return ScoreController;
}());
exports.ScoreController = ScoreController;
//# sourceMappingURL=score.controller.js.map