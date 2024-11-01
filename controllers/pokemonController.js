const pokemonModel = require('../models/pokemon'); // Importa o modelo

// Função para obter todos os Pokémon e renderizar a lista
const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons(); 
    res.render('index', { pokemons }); 
};

// Função para renderizar o formulário de criação de Pokémon
const createNewPokemon = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('createNewPokemon', { pokemons }); 
};

// Função para processar o formulário de criação de Pokémon
const storeNewPokemon = (req, res) => {
    const newPokemon = {
        nome: req.body.name,
        tipo: req.body.type 
    };
    pokemonModel.addPokemon(newPokemon); 
    res.redirect('/pokemons'); 
};

// Função para obter um Pokémon por ID
const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id); 
    if (pokemon) {
        res.render('pokemon', { pokemon }); 
    } else {
        res.status(404).send('Pokémon não encontrado'); 
    }
};

module.exports = {
    getAllPokemons,
    createNewPokemon,
    storeNewPokemon,
    getPokemon
};
