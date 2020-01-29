const { log, logError } = require('./utils/consoleLog')

process.on('uncaughtException', err => {
  logError('Uncaught Exception 💥 Shutting down...')
  logError(err)
  process.exit(1)
})

const express = require('express')

const app = express()

app.route('/').get((req, res) => {
  res.send('🍂 wildleaf-api-postgres')
})

app.route('*').all((req, res) => {
  res.send('💥 404 💥')
})

const server = app.listen('3000', () =>
  log('🔋 Server running on port 3000... 🔋')
)

process.on('unhandledRejection', err => {
  logError('Unhandled Rejection 💥 Shutting down...')
  logError(err)
  server.close(() => process.exit(1))
})
