const trainerModel = require('../models/trainer'); 
const pokemonModel = require('../models/pokemon'); 


const getAllTrainers = (req, res) => {
    const trainers = trainerModel.getTrainers(); 
    res.render('trainers', { trainers }); 
};


const createNewTrainer = (req, res) => {
    const pokemons = pokemonModel.getPokemons(); 
    res.render('createNewTrainer', { pokemons }); 
};

const storeNewTrainer = (req, res) => {
    const selectedPokemonIds = req.body.pokemons || []; 
    const selectedPokemons = selectedPokemonIds.map(id => pokemonModel.getPokemonById(id)); 

    const newTrainer = new trainerModel.Trainer(req.body.name, selectedPokemons); 
    trainerModel.addTrainer(newTrainer); 
    res.redirect('/trainers'); 
};

module.exports = {
    getAllTrainers,
    createNewTrainer,
    storeNewTrainer
};
