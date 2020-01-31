const { log } = require('../utils/consoleLog')
const withCatch = require('../utils/withCatch')
const Tour = require('../models/Tour')

exports.queryAllTours = withCatch(async (req, res, next) => {
  const tours = await Tour.queryAllTours(req.query)

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  })
})

exports.addNewTour = withCatch(async (req, res, next) => {
  const tour = new Tour(req.body)
  await tour.save()

  res.status(201).json({
    status: 'success',
    data: {
      tour
    }
  })
})

exports.getTourStats = withCatch(async (req, res, next) => {
  const stats = await Tour.aggregateStats()

  res.status(200).json({
    status: 'success',
    data: {
      stats
    }
  })
})

// exports.getMonthlyTourStarts = withCatch(async (req, res, next) => {
//   res.status(200).json({
//     status: 'success',
//     data: {
//       getMonthlyTourStarts: {}
//     }
//   })
// })

exports.getTopTours = withCatch(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: []
    }
  })
})

exports.getTour = withCatch(async (req, res, next) => {
  const tour_id = req.params.id

  const tour = await Tour.getById(tour_id)

  res.status(200).json({
    status: 'success',
    tour
  })
})

exports.updateTour = withCatch(async (req, res, next) => {
  const tour = await Tour.getByIdAndUpdate(req.params.id, req.body)

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  })
})

exports.deleteTour = withCatch(async (req, res, next) => {
  await Tour.getByIdAndDelete(req.params.id)

  res.status(204).json({
    status: 'success',
    data: null
  })
})
