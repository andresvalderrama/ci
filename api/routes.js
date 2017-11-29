const router = require('express').Router()
const getAllPokemon = require('./getAllPokemon')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('pokedex api v1.0')
})

router.get('/pokemon', getAllPokemon)

module.exports = router
