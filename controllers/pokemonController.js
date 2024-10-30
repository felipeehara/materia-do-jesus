const pokemonModel = require('../models/pokemon'); 

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons(); 
    res.render('index', { pokemons }); 
};
const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('pokemon', { pokemon });
    } else {
        res.status(404).send('Pokemon não encontrado');
    }
};

const createNewPokemon = (req, res) => {
    res.render('createNewPokemon'); 
};

const storeNewPokemon = (req, res) => {
    const { nome, tipo } = req.body; 

 
    pokemonModel.addPokemon({ nome, tipo }); 

    res.redirect('/'); 
};

module.exports = { getAllPokemons, getPokemon, createNewPokemon, storeNewPokemon };
