const Sequalize = require("sequelize")
const { DATABASE, hostname } = require("../config/envs.json")

//CREACION DE LA DATA BASE
const db = new Sequalize (DATABASE.NAME, null, null, {
    host: hostname,
    dialect: DATABASE.TYPE,
    logging: false
})

module.exports = db