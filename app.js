const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./routes/pokemonRoutes');
const trainerRoutes = require('./routes/trainerRoutes');

const app = express();

app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', './views'); 

app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/pokemons', pokemonRoutes);
app.use('/trainers', trainerRoutes);


app.get('/', (req, res) => {
    res.redirect('/pokemons');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
