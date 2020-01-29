const pool = require('./config')

const db = {
  query: (sql, params) => {
    return pool.query(sql, params)
  }
}

module.exports = db
