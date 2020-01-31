const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
const { log, logError } = require('../utils/consoleLog')
const Tour = require('../models/Tour')

dotenv.config({ path: './config.env' })

const db = require('./index')

const clearTours = async () => {
  const sqlText = 'DELETE FROM tours'
  await db.query(sqlText)
  log('Tours table cleared')
}

const seedTours = async () => {
  const toursJson = fs.readFileSync(
    path.join(__dirname, '../assets/data/initial-tours.json'),
    'utf-8'
  )
  const rawTours = JSON.parse(toursJson)
  const tours = rawTours.map(rawTour => new Tour(rawTour))
  const saveTourPromises = tours.map(tour => tour.save())
  try {
    const tours = await Promise.all(saveTourPromises)
    log('Tours Saved to Database')
    log(tours)
  } catch (error) {
    logError(error)
  }
}

if (process.argv[2] === '--delete-first') {
  ;(async function () {
    await clearTours()
    seedTours()
  })()
} else {
  seedTours()
}
