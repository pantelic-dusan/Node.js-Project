import * as Express from 'express'
import { Request, Response } from 'express'
import { MongoDBService } from '../services/mongodb.service'

export class ScoreController {
    public path: string = '/scores'
    private router = Express.Router()
    private mongoDBService: MongoDBService

    constructor () {
        this.mongoDBService = new MongoDBService('mongodb://root:password@localhost:27017','tetris_scores');
        this.initRoutes()
    }

    private initRoutes () {
        this.router.get(this.path, this.getScores.bind(this))
        this.router.get(this.path + '/:username', this.getScoresByUsername.bind(this))
        this.router.get(this.path + '/:startDate&:endDate', this.getScoresByDateRange.bind(this))
        this.router.post(this.path, this.postScore.bind(this))
        this.router.put(this.path + '/:_id', this.putScore.bind(this))
        this.router.delete(this.path + '/:_id', this.deleteScore.bind(this))
    }

    private async getScores (req: Request, res: Response) {
        await this.mongoDBService.connect()
    
        let scores = await this.mongoDBService.find('scores')
    
        this.mongoDBService.disconnect()
        res.send(scores)
    }

    private async getScoresByUsername (req: Request, res: Response) {
        await this.mongoDBService.connect()
    
        let scores = await this.mongoDBService.find('scores', {username: req.params.username})
    
        this.mongoDBService.disconnect()
        res.send(scores)
    }

    private async getScoresByDateRange (req: Request, res: Response) {
        await this.mongoDBService.connect()
        
        let scores = await this.mongoDBService.find('scores', 
        {
            date: {
                $gte: req.params.startDate,
                $lte: req.params.endDate
            }
        })
    
        this.mongoDBService.disconnect()
        res.send(scores)
    }

    private async postScore (req: Request, res: Response) {
        await this.mongoDBService.connect()
    
        await this.mongoDBService.insert('scores', {
            username: req.body.username, 
            score: req.body.score,
            date: new Date()
        })
    
        this.mongoDBService.disconnect()
        res.send('Success')
    }

    private async putScore (req: Request, res: Response) {
        await this.mongoDBService.connect()
    
        await this.mongoDBService.update('scores', 
        {
            _id: parseInt(req.params._id)
        },
        {
            username: req.body.username, 
            score: req.body.score,
            date: new Date()
        })
    
        this.mongoDBService.disconnect()
        res.send('Success')
    }

    private async deleteScore (req: Request, res: Response) {
        await this.mongoDBService.connect()

        await this.mongoDBService.delete('users', { _id: parseInt(req.params._id)})

        this.mongoDBService.disconnect()
        res.send('Success')
    }
}