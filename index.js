const express = require('express')
const cors = require("cors")
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 4040

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/admins',require('./routes/admins/index'))
app.use('/api/login',require('./routes/admins/login'))
app.use('/api/extensions',require('./routes/extensions/index'))
app.use('/api/departments',require('./routes/departments/index'))
app.use('/api/campuses',require('./routes/campuses/index'))

app.get('/',(req,res) => {
    return res.json('Hello')
})

app.listen(PORT,(req,res) => {
    console.log(`Server running on port ${PORT}`)
})
