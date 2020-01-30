const { logError } = require('./utils/consoleLog')

const sendDevError = (err, res) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500
  const status = err instanceof AppError ? 'failure' : 'error'

  res.status(statusCode).json({
    data: 'Development Error Report',
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

const errorController = (err, req, res, next) => {
  const env = process.env.NODE_ENV
  if (env === 'development') {
    sendDevError(err, res)
  } else if (env === 'production') {
    sendProdError(err, res)
  }
}

module.exports = errorController
