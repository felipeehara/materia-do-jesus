// exports.showCreateTrainerForm = (req, res) => {
//     res.render('createNewTrainer'); // Renderiza a página de cadastro do treinador
// };

// exports.createTrainer = async (req, res) => {
//     try {
//         const { name } = req.body;
//         await Trainer.create({ name }); // Salva no banco de dados, se houver um modelo configurado
//         res.redirect('/'); // Redireciona para a página principal ou onde desejar
//     } catch (error) {
//         res.status(500).send('Erro ao cadastrar treinador');
//     }
// };



const Trainer = require('../models/trainer');
const { getPokemons } = require('../models/pokemon'); // Verifique se essa linha é realmente necessária

// Array para simular banco de dados (se necessário)
const trainers = [];

// Exibir formulário de cadastro do treinador
exports.showCreateTrainerForm = (req, res) => {
    const pokemons = getPokemons(); // Verifique se esta função já foi usada antes
    res.render('createNewTrainer', { pokemons });
};

// Criar um novo treinador
exports.createTrainer = (req, res) => {
    const { name, pokemonIds } = req.body;

    // Verifica se os Pokémons foram selecionados
    if (!pokemonIds || pokemonIds.length === 0) {
        return res.status(400).send("Selecione pelo menos um Pokémon.");
    }

    // Cria uma lista de pokémons com base nos IDs selecionados
    const selectedPokemons = pokemonIds.map(id => getPokemons().find(p => p.id == id));

    // Cria o treinador com a lista de pokémons selecionados
    const newTrainer = new Trainer(Date.now(), name, selectedPokemons);
    trainers.push(newTrainer);

    res.redirect('/trainers'); // Redireciona para uma página que lista os treinadores, por exemplo
};
