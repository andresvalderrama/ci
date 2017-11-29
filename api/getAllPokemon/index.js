const db = require('../../config/connect')

module.exports = (req, res, next) => {
  res.json({
    result: db.get('species').value()
  })
}
