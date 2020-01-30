exports.queryAllTours = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    results: 0,
    data: {
      tours: []
    }
  })
}

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
  res.status(200).json({
    status: 'success',
    data: {
      tour: {}
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
  res.status(200).json({
    status: 'success',
    data: {
      tour: {}
    }
  })
}
