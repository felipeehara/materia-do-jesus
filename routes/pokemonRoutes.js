const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController'); // Verifique se o caminho está correto

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);

module.exports = router;
