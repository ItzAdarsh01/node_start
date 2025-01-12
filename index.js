require('dotenv').config()
const express = require('express')
const app = express()
const PORT=process.env.PORT
app.get('/test', function (req, res) {
  res.send('error 404:test file')
})

app.get('/', function (req, res) {
    res.send('welcome user')
  })
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})