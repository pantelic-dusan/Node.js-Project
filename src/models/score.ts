import { IModel } from '../interfaces/IModel'

export class Score implements IModel {
    private scoreId: number
    private playerName: string
    private playerScore: number
    private createdDate: Date

    constructor (id: number, name: string, score: number) {
        this.scoreId = id
        this.playerName = name
        this.playerScore = score
        this.createdDate = new Date()
    }

    getId (): number {
        return this.scoreId
    }

    setId (value: number) {
        this.scoreId = value
    }

    getName (): string {
        return this.playerName
    }

    setName (value: string) {
        this.playerName = value
    }

    getScore (): number {
        return this.playerScore
    }

    setScore (value: number) {
        this.playerScore = value;
    }

    getDateCreated (): Date {
        return this.createdDate
    }

}