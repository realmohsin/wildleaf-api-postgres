const express = require('express')
const tourRouter = require('./routes/tourRoutes')
const errorController = require('./controllers/errorController')

const app = express()

app.use(express.json())

app.use(tourRouter)

app.use(errorController)

module.exports = app
