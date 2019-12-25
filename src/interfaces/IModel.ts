export interface IModel {
    
    getName (): string
    setName (value: string): void

    getScore (): number
    setScore (value: number): void

    getDateCreated (): Date

}