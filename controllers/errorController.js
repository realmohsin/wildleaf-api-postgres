const errorController = (err, req, res, next) => {
  res.status(400).json({
    status: 'error',
    message: 'Error Occurred'
  })
}

module.exports = errorController
