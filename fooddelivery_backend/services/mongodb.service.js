const { MongoClient } = require('mongodb');
const { mongoConfig } = require('../config')

class MongoDb {
    static connecToMongoDB = () => {
        MongoClient.connect(mongoConfig.connectionUrl).then(
            (connection) => {
                console.log("MongoDB Connected");
                this.db = connection.db(mongoConfig.databse)
            }
        ).catch(error => console.error(`MongoDB not Connected : ${error}`));
    };
}

MongoDb.db = null;

module.exports = MongoDb;