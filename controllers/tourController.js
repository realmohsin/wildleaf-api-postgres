const { log } = require('../utils/consoleLog')
const withCatch = require('../utils/withCatch')
const Tour = require('../models/Tour')

exports.queryAllTours = withCatch(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    results: 0,
    data: {
      tours: [],
      reqQuery: req.query,
      reqBody: req.body,
      dogs
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
  res.status(200).json({
    status: 'success',
    data: {
      stats: {}
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
  res.status(200).json({
    status: 'success',
    data: {
      tour: {}
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
