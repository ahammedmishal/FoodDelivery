const config = require('./package.json').projectConfig

module.exports = {
    mongoConfig: {
        connectionUrl: config.mongoConnectionUrl,
        databse: "foodelivery_db",
        collections: {
            USERS: "users",
        },
    },
    serverConfig : {
        ip: config.serverIp,
        port: config.serverPort,
    },
    tokenSecret: "foodelivery_secret"
}