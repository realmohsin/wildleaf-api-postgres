const express = require('express')
const tourController = require('../controllers/tourController')

const router = express.Router()

router
  .route('/api/v1/tours')
  .get(tourController.queryAllTours)
  .post(tourController.addNewTour)

router.route('/api/v1/tours/tour-stats').get(tourController.getTourStats)

router.route('/api/v1/tours/monthly-tour-starts/:year')
// .get(tourController.getMonthlyTourStarts)

router.route('/api/v1/tours/top-5-cheap').get(tourController.getTopTours)

router
  .route('/api/v1/tours/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour)

module.exports = router
