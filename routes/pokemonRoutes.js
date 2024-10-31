const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/createNewPokemon', pokemonController.createNewPokemon); // Renderiza o formulário
router.post('/createNewPokemon', pokemonController.storeNewPokemon); // Processa o formulário

module.exports = router;
