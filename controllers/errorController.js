const { logError } = require('../utils/consoleLog')
const AppError = require('../utils/AppError')

const sendDevError = (err, res) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500
  const status = err instanceof AppError ? 'failure' : 'error'

  res.status(statusCode).json({
    title: 'Error in Development',
    status,
    error: err,
    message: err.message,
    stack: err.stack
  })
}

const sendProdError = (err, res) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'failure',
      message: err.message
    })
  } else {
    logError('💥💥💥 ERROR 💥💥💥 ', '\n', err)
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    })
  }
}

const errorController = (origError, req, res, next) => {
  const env = process.env.NODE_ENV

  let newError
  if (origError.code === '23505') {
    newError = new AppError('That resource already exists', 400)
  }

  if (env === 'development') {
    sendDevError(origError, res)
  } else if (env === 'production') {
    sendProdError(newError || origError, res)
  }
}

module.exports = errorController
