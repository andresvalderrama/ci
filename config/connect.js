const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./db/pokemon.json')
const db = low(adapter)

// Set some defaults
db.defaults({ species: [] })
  .write()

module.exports = db
