const express = require('express')
const dotenv = require('dotenv')

//Load env servers
dotenv.config({ path: './config.env' })
const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success:true ,msg:"Show all bootcamps"});
})

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success:true ,msg:"Create new bootcamp"});
})


app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success:true ,msg:`Display bootcamp ${req.params}`});
})


app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success:true ,msg:`Delete bootcamp ${req.params}`});
})



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is running in ${PORT} `)
})
