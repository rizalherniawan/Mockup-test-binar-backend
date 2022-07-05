const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const api = require('./routes')
const PORT = 4000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(api)

app.listen(PORT, () => {
    console.log(`Server is connected to PORT: ${PORT}`)
})