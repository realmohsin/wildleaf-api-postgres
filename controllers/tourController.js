const { log } = require('../utils/consoleLog')
const withCatch = require('../utils/withCatch')

exports.queryAllTours = withCatch(async (req, res, next) => {
  log(JSON.stringify(req.query, null, 2))
  log(JSON.stringify(req.body, null, 2))
  res.status(200).json({
    status: 'success',
    results: 0,
    data: {
      tours: [],
      reqQuery: req.query,
      reqBody: req.body
    }
  })
})

exports.addNewTour = withCatch(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
    data: {
      tour: {}
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

exports.getMonthlyTourStarts = withCatch(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      getMonthlyTourStarts: {}
    }
  })
})

exports.getTopTours = withCatch(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: []
    }
  })
})

exports.getTour = withCatch(async (req, res, next) => {
  log(req.params)

  res.status(200).json({
    status: 'success',
    data: {
      tour: {},
      reqParams: req.params
    }
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
  res.status(204).json({
    status: 'success',
    data: null
  })
})
