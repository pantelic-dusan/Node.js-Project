"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Score = /** @class */ (function () {
    function Score(id, name, score) {
        this.scoreId = id;
        this.playerName = name;
        this.playerScore = score;
        this.createdDate = new Date();
    }
    Score.prototype.getId = function () {
        return this.scoreId;
    };
    Score.prototype.setId = function (value) {
        this.scoreId = value;
    };
    Score.prototype.getName = function () {
        return this.playerName;
    };
    Score.prototype.setName = function (value) {
        this.playerName = value;
    };
    Score.prototype.getScore = function () {
        return this.playerScore;
    };
    Score.prototype.setScore = function (value) {
        this.playerScore = value;
    };
    Score.prototype.getDateCreated = function () {
        return this.createdDate;
    };
    return Score;
}());
exports.Score = Score;
//# sourceMappingURL=score.js.map