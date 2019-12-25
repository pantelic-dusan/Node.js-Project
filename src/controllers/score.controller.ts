import * as Express from 'express'
import { Request, Response } from 'express'
import { Score } from '../models/score'

export class ScoreController {
    public path: string = '/scores'
    public router = Express.Router()

    constructor () {
        this.initRoutes()
    }

    public initRoutes () {
        this.router.get(this.path, this.getScores)
    }

    getScores (req: Request, res: Response) {
        let score1 = new Score(1,'Player 1', 100)
        let score2 = new Score(2,'Player 2', 200)
        var scores: Score[] = [score1, score2]

        res.send (scores)
    }
}