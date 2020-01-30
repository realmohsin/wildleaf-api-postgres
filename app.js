const express = require('express')
const tourRouter = require('./routes/tourRoutes')
const errorController = require('./controllers/errorController')
const AppError = require('./utils/AppError')

const app = express()

app.use(express.json())

app.use(tourRouter)

app.all('*', (req, res, next) => {
  next(new AppError('Page Not Found', 404))
})

app.use(errorController)

module.exports = app
