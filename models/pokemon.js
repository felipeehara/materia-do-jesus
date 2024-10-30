let pokemons = [
    { id: 1, nome: 'Bulbasaur', tipo: 'Grama' },
    { id: 2, nome: 'Charmander', tipo: 'Fogo' },
    { id: 3, nome: 'Squirtle', tipo: 'Água' },
];

// Função para obter todos os Pokémon
const getPokemons = () => {
    return pokemons;
};

// Função para obter um Pokémon por ID
const getPokemonById = (id) => {
    return pokemons.find(pokemon => pokemon.id === parseInt(id));
};

// Função para adicionar um novo Pokémon
const addPokemon = (pokemon) => {
    pokemon.id = pokemons.length + 1;
    pokemons.push(pokemon);
};

module.exports = { getPokemons, getPokemonById, addPokemon };
