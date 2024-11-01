let pokemons = [
    { id: 1, nome: 'Bulbasaur', tipo: 'Grama' },
    { id: 2, nome: 'Charmander', tipo: 'Fogo' },
    { id: 3, nome: 'Squirtle', tipo: 'Água' },
];


const getPokemons = () => {
    return pokemons;
};


const getPokemonById = (id) => {
    return pokemons.find(pokemon => pokemon.id === parseInt(id));
};


const addPokemon = (pokemon) => {
    pokemon.id = pokemons.length + 1;
    pokemons.push(pokemon);
};

module.exports = { getPokemons, getPokemonById, addPokemon };
