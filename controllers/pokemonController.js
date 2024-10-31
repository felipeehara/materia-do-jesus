const pokemonModel = require('../models/pokemon'); // Importa o modelo

// Função para obter todos os Pokémon e renderizar a lista
const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons(); // Obtém todos os Pokémon
    res.render('index', { pokemons }); // Renderiza a página inicial com a lista de Pokémon
};

// Função para renderizar o formulário de criação de Pokémon
const createNewPokemon = (req, res) => {
    const pokemons = pokemonModel.getPokemons(); // Obtém todos os Pokémon
    res.render('createNewPokemon', { pokemons }); // Renderiza o formulário
};

// Função para processar o formulário de criação de Pokémon
const storeNewPokemon = (req, res) => {
    const newPokemon = {
        nome: req.body.name,
        tipo: req.body.type // Adicione aqui a lógica para pegar o tipo se necessário
    };
    pokemonModel.addPokemon(newPokemon); // Adiciona o novo Pokémon
    res.redirect('/pokemons'); // Redireciona para a lista de Pokémon
};

// Função para obter um Pokémon por ID
const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id); // Obtém o Pokémon pelo ID
    if (pokemon) {
        res.render('pokemon', { pokemon }); // Renderiza a página de detalhes do Pokémon usando pokemon.ejs
    } else {
        res.status(404).send('Pokémon não encontrado'); // Se não encontrar, retorna um erro 404
    }
};

module.exports = {
    getAllPokemons,
    createNewPokemon,
    storeNewPokemon,
    getPokemon
};
