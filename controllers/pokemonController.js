const pokemonModel = require('../models/pokemon'); // Verifique se está assim

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

module.exports = { getAllPokemons, getPokemon };


// const getPokemon = (req, res) => {
//     const pokemomn = pokemonModel.getPokemonById(req.params.id);
//     if (pokemon) {
//         res.render('pokemon', {pokemon});
//     } else {
//         res.status(404).send('Pokemon não encontrado');
//     }
// }