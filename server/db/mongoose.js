const mongoose = require('mongoose')
require('dotenv').config()


//create mongoose connection for gfs
const conn = mongoose.createConnection(process.env.MONGO_DB)

const db_connect = (callback)=>{
    mongoose.connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    callback('Connected Succesfully in DB')
}

module.exports = {
    db_connect,
    conn
}
