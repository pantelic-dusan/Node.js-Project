import * as Util from 'util'
import { MongoClient, MongoError } from 'mongodb'

export class MongoDBService {

    public url: string
    public databaseName: string
    private client: any
    private database: any

    constructor (url: string, databaseName: string) {
        this.url = url
        this.databaseName = databaseName
    }

    public async connect () {
        const connect = Util.promisify(MongoClient.connect);
        this.client = await connect(this.url);
        this.database = this.client.db(this.databaseName);
    }

    public disconnect () {
        this.client.close()
    }

    public find (collection: string, parameters: object = {}){
        return new Promise((resolve, reject) => {
            this.database.collection(collection).find(parameters)
                .toArray((error: MongoError, data: Array<object>) => {
                    if (error)
                        reject();
            
                    resolve(data);
                });
        })
    }
}