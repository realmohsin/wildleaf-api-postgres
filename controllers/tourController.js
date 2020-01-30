const { log } = require('../utils/consoleLog')
const withCatch = require('../utils/withCatch')

exports.queryAllTours = withCatch(async (req, res, next) => {
  throw new Error()
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

exports.addNewTour = (req, res, next) => {
  res.status(201).json({
    status: 'success',
    data: {
      tour: {}
    }
  })
}

exports.getTourStats = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      stats: {}
    }
  })
}

exports.getMonthlyTourStarts = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      getMonthlyTourStarts: {}
    }
  })
}

exports.getTopTours = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: []
    }
  })
}

exports.getTour = (req, res, next) => {
  log(req.params)

  res.status(200).json({
    status: 'success',
    data: {
      tour: {},
      reqParams: req.params
    }
  })
}

exports.updateTour = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: {}
    }
  })
}

exports.deleteTour = (req, res, next) => {
  res.status(204).json({
    status: 'success',
    data: null
  })
}
