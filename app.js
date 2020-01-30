const express = require('express')
const tourRouter = require('./routes/tourRoutes')

const app = express()

app.use(tourRouter)

module.exports = app
