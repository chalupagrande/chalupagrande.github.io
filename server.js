const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 4000;

app.use(express.static('public'))

app.listen(port)
console.log(`listening on ${port}`)