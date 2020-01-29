const express = require('express')

const app = express()

app.route('/').get((req, res) => {
  res.send('🍂 wildleaf-api-postgres')
})

app.route('*').all((req, res) => {
  res.send('💥 404 💥')
})

module.exports = app
