let trainers = [];

class Trainer {
    constructor(name, pokemons = []) {
        this.id = trainers.length + 1; 
        this.name = name;
        this.pokemons = pokemons; 
    }


    addPokemon(pokemon) {
        this.pokemons.push(pokemon);
    }
}


const addTrainer = (trainer) => {
    trainers.push(trainer);
};


const getTrainers = () => {
    return trainers;
};

module.exports = { Trainer, addTrainer, getTrainers };
