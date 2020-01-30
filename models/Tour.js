class Tour {
  constructor ({
    name,
    duration,
    maxGroupSize,
    difficulty,
    price,
    summary,
    imageCover,
    startDate,
    ratingsAverage = 3.5,
    ratingsQuantity = 0,
    priceDiscount = 0,
    privateTour = false
  }) {
    this.name = name
    this.duration = duration
    this.maxGroupSize = maxGroupSize
    this.difficulty = difficulty
    this.price = price
    this.summary = summary
    this.imageCover = imageCover
    this.startDate = startDate
    this.ratingsAverage = ratingsAverage
    this.ratingsQuantity = ratingsQuantity
    this.priceDiscount = priceDiscount
    this.privateTour = privateTour
  }

  save () {}

  static queryAllTours (reqQuery) {}

  static getById () {}

  static getByIdAndUpdate () {}

  static getByIdAndDelete () {}

  static aggregateStats () {}
}

module.exports = Tour
