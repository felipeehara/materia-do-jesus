const trainerModel = require('../models/trainer'); // Importa o modelo de treinador
const pokemonModel = require('../models/pokemon'); // Importa o modelo de Pokémon

// Função para obter todos os treinadores e renderizar a lista
const getAllTrainers = (req, res) => {
    const trainers = trainerModel.getTrainers(); // Obtém todos os treinadores
    res.render('trainers', { trainers }); // Renderiza a página com a lista de treinadores
};

// Função para renderizar o formulário de criação de treinador
const createNewTrainer = (req, res) => {
    const pokemons = pokemonModel.getPokemons(); // Obtém todos os Pokémon para serem listados no formulário
    res.render('createNewTrainer', { pokemons }); // Renderiza o formulário com a lista de Pokémon
};

const storeNewTrainer = (req, res) => {
    const selectedPokemonIds = req.body.pokemons || []; // Obtém os IDs dos Pokémon selecionados
    const selectedPokemons = selectedPokemonIds.map(id => pokemonModel.getPokemonById(id)); // Obtém os Pokémon por ID

    const newTrainer = new trainerModel.Trainer(req.body.name, selectedPokemons); // Cria o novo treinador com os Pokémon
    trainerModel.addTrainer(newTrainer); // Adiciona o novo treinador
    res.redirect('/trainers'); // Redireciona para a lista de treinadores
};

module.exports = {
    getAllTrainers,
    createNewTrainer,
    storeNewTrainer
};
