const express = require('express')

const router = express.Router()

router
  .route('/api/v1/tours')
  .get()
  .post()

router
  .route('/api/v1/tours/:id')
  .get()
  .patch()
  .delete()

router.route('/tour-stats').get()

router.route('/monthly-tour-starts/:year').get()

router.route('/top-5-cheap').get()

module.exports = router
