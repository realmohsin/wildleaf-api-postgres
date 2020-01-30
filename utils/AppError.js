// AppError for expectable application errors that should lead to 400 status codes
// 500 should usually mean non-AppError occurred

class AppError extends Error {
  constructor (msg, statusCode) {
    super(msg)
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = AppError
