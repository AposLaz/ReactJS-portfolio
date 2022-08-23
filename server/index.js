require('dotenv').config()
const express = require('express')
const initRoutes = require('./routes/file_routers')
var cors = require('cors')

const app = express()

const {db_connect} = require('./db/mongoose')

const port = process.env.PORT

//connect to db
db_connect((result)=>{
    console.log(result)
})
app.use(cors())
//accept only json format
app.use(express.json())

initRoutes.routes(app)

app.listen(port,()=>{
    console.log('Server is up on port '+port)
})
