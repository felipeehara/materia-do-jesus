
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Trainer = sequelize.define('Trainer', {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     // Outros campos podem ser adicionados aqui
// });

// module.exports = Trainer;



class Trainer {
    constructor(id, name, pokemons = []) {
        this.id = id;
        this.name = name;
        this.pokemons = pokemons; // Lista de IDs ou objetos de Pokémons associados ao treinador
    }

    // Método para adicionar um Pokémon ao treinador
    addPokemon(pokemon) {
        this.pokemons.push(pokemon);
    }
}

module.exports = Trainer;