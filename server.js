const { log, logError } = require('./utils/consoleLog')

process.on('uncaughtException', err => {
  logError('Uncaught Exception 💥 Shutting down...')
  logError(err)
  process.exit(1)
})

process.on('unhandledRejection', err => {
  logError('Unhandled Rejection 💥 Shutting down...')
  logError(err)
  if (server) {
    server.close(() => process.exit(1))
  }
})

if (process.env.NODE_ENV === 'development') {
  const dotenv = require('dotenv')
  dotenv.config({ path: './config.env' })
}

const db = require('./database')
const app = require('./app')

let server
const port = process.env.PORT

;(async () => {
  const dbRes = await db.query('SELECT current_database()')
  const dbName = dbRes.rows[0].current_database
  log(`✅  Connected to PostgreSQL, Database Name: ${dbName}`)

  server = app.listen(port, () =>
    log(`✅  NodeJs Server Running on Port ${port}...`)
  )
})().catch(logError)
