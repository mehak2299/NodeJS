const express = require('express')
const dotenv = require('dotenv')
const morgan=require('morgan')
//Route files
const bootcamps=require('./routes/bootcamp')
//Load env servers
dotenv.config({ path: './config.env' })
const app = express();
//Dev logging middelware
if(process.env.NODE_ENV=='development')
{
    app.unsubscribe(morgan('dev'));
}
//Mount Routers
app.use('/api/v1/bootcamps',bootcamps)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is running in ${PORT} `)
})
