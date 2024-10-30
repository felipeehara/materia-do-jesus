const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/createNewPokemon', pokemonController.createNewPokemon);
router.post('/createNewPokemon', pokemonController.storeNewPokemon); 

module.exports = router;