import * as Express from 'express'
import { Request, Response } from 'express'
import { Score } from '../models/score'
import { MongoDBService } from '../services/mongodb.service'

export class ScoreController {
    public path: string = '/scores'
    public router = Express.Router()
    private mongoDBService: MongoDBService

    constructor () {
        this.mongoDBService = new MongoDBService('mongodb://root:password@localhost:27017','tetris_scores');
        this.initRoutes()
    }

    public initRoutes () {
        this.router.get(this.path, this.getScores.bind(this))
    }

    public async getScores(req: Request, res: Response) {
        await this.mongoDBService.connect();
    
        let scores = await this.mongoDBService.find('users');
    
        this.mongoDBService.disconnect();
        res.send(scores);
    }
}