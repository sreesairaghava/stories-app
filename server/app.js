// Adding all required Dependencies 

const express = require('express')
const routes = require('./routes/index')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')

const app = express()
const router = express.Router()
const url = process.env.MONGODB_URI || "mogodb://localhost:27017/stories"

// configure cloudinary

cloudinary.config({
    cloud_name: 'sreesai',
    api_key:'436891433438718',
    api_secret:'1PGTqS_8se_RiqmprlBXoOVsijY',

})

/* Connect to MongoDB datastore */
try{
    mongoose.connect(url,()=>{
        console.log("connected successfully")
    })
}
catch(error){
    console.log(error)

}

let PORT = 5000 || process.env.PORT

/*Setup routes for API End points */
routes(router)

/* Setup Middle Wares */

app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

app.use('/api',router)

/* Start Server */
app.listen(PORT,()=>{
    console.log(`server started listening at ${PORT}`)
})