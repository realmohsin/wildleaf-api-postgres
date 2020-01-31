const db = require('../database')
const { log } = require('../utils/consoleLog')
const AppError = require('../utils/AppError')

class Tour {
  constructor ({
    name,
    duration,
    maxGroupSize,
    difficulty,
    price,
    summary,
    imageCover,
    // startDate,
    ratingsAverage = 3.5,
    ratingsQuantity = 0,
    priceDiscount = 0,
    privateTour = false
  }) {
    this.tour_id = String(Math.random())
    this.name = name
    this.duration = duration
    this.maxGroupSize = maxGroupSize
    this.difficulty = difficulty
    this.price = price
    this.summary = summary
    this.imageCover = imageCover
    this.ratingsAverage = ratingsAverage
    this.ratingsQuantity = ratingsQuantity
    this.priceDiscount = priceDiscount
    this.privateTour = privateTour
  }

  async save () {
    const sqlText =
      'INSERT INTO tours (name, duration, maxGroupSize, difficulty, price, summary, imageCover, ratingsAverage, ratingsQuantity, priceDiscount, privateTour, tour_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)'
    const sqlValues = [
      this.name,
      this.duration,
      this.maxGroupSize,
      this.difficulty,
      this.price,
      this.summary,
      this.imageCover,
      this.ratingsAverage,
      this.ratingsQuantity,
      this.priceDiscount,
      this.privateTour,
      this.tour_id
    ]
    await db.query(sqlText, sqlValues)
    return this
  }

  static queryAllTours (reqQuery) {}

  static async getById (tour_id) {
    const sqlText = 'SELECT * FROM tours WHERE tour_id=$1'
    const sqlValues = [tour_id]

    const dbRes = await db.query(sqlText, sqlValues)
    const tour = dbRes.rows[0]
    if (!tour) {
      throw new AppError('Resource could not be found', 404)
    }
    return tour
  }

  static getByIdAndUpdate () {}

  static async getByIdAndDelete (tour_id) {
    const sqlText = 'DELETE FROM tours WHERE tour_id=$1'
    const sqlValues = [tour_id]

    const dbRes = await db.query(sqlText, sqlValues)

    if (dbRes.rowCount === 0) {
      throw new AppError('Resource cound not be found', 404)
    }
  }

  static aggregateStats () {}
}

module.exports = Tour
