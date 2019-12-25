"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util = require("util");
const mongodb_1 = require("mongodb");
class MongoDBService {
    constructor(url, databaseName) {
        this.url = url;
        this.databaseName = databaseName;
    }
    async connect() {
        const connect = Util.promisify(mongodb_1.MongoClient.connect);
        this.client = await connect(this.url);
        this.database = this.client.db(this.databaseName);
    }
    disconnect() {
        this.client.close();
    }
    find(collection, parameters = {}) {
        return new Promise((resolve, reject) => {
            this.database.collection(collection).find(parameters)
                .toArray((error, data) => {
                if (error)
                    reject();
                resolve(data);
            });
        });
    }
}
exports.MongoDBService = MongoDBService;
//# sourceMappingURL=mongodb.service.js.map