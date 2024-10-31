let trainers = [];

class Trainer {
    constructor(name, pokemons = []) {
        this.id = trainers.length + 1; // Atribui um ID sequencial
        this.name = name;
        this.pokemons = pokemons; // Lista de objetos Pokémon associados ao treinador
    }

    // Método para adicionar um Pokémon ao treinador
    addPokemon(pokemon) {
        this.pokemons.push(pokemon);
    }
}

// Função para adicionar um novo treinador
const addTrainer = (trainer) => {
    trainers.push(trainer);
};

// Função para obter todos os treinadores
const getTrainers = () => {
    return trainers;
};

module.exports = { Trainer, addTrainer, getTrainers };
