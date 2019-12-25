"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Score {
    constructor(name, score) {
        this.playerName = name;
        this.playerScore = score;
        this.createdDate = new Date();
    }
    getName() {
        return this.playerName;
    }
    setName(value) {
        this.playerName = value;
    }
    getScore() {
        return this.playerScore;
    }
    setScore(value) {
        this.playerScore = value;
    }
    getDateCreated() {
        return this.createdDate;
    }
}
exports.Score = Score;
//# sourceMappingURL=score.js.map