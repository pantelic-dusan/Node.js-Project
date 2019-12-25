export interface IModel {
    getId (): number
    setId (value: number): void

    getName (): string
    setName (value: string): void

    getScore (): number
    setScore (value: number): void

    getDateCreated (): Date

}