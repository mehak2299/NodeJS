const express=require('express')
const dotenv=require('dotenv')

//Load env servers
dotenv.config({path:'./config.env'})
const app=express();
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`server is running in ${PORT} `)
})