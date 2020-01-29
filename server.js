const { log, logError } = require('./utils/consoleLog')

process.on('uncaughtException', err => {
  logError('Uncaught Exception 💥 Shutting down...')
  logError(err)
  process.exit(1)
})
