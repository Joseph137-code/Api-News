const express = require('express')
const cors = require ('cors')
const app = express()
require('dotenv').config()

app.use(cors())

app.use(express.json());


//Routes
app.use('/', require('./routes/news'))



app.listen(process.env.PORT, () => {
    console.log(`app listening at http://localhost:${process.env.PORT}`)
})
