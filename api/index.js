const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/users', db.getUsers)

// Set the HTTP request method, endpoint URL and the relevant function.
app.get('/users/:bfid', db.getUserInfo)

// TODO: Add request body validation here with checks that all fields are being populated.
app.post('/users', db.registerUser)

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})