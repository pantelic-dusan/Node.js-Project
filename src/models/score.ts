import { IModel } from '../interfaces/IModel'

export class Score implements IModel {
    private playerName: string
    private playerScore: number
    private createdDate: Date

    constructor (name: string, score: number) {
        this.playerName = name
        this.playerScore = score
        this.createdDate = new Date()
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