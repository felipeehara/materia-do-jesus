const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./routes/pokemonRoutes');
const trainerRoutes = require('./routes/trainerRoutes');

const app = express();

app.use(express.static('public'));

// Configuração do motor de template EJS
app.set('view engine', 'ejs');
app.set('views', './views'); // Especifique o diretório onde seus arquivos .ejs estão localizados

app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/pokemons', pokemonRoutes);
app.use('/trainers', trainerRoutes);

// Redirecionar a raiz para a lista de Pokémons
app.get('/', (req, res) => {
    res.redirect('/pokemons');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
