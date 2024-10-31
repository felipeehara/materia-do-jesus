
// const express = require('express');
// const router = express.Router();
// const trainerController = require('../controllers/trainerController');

// // Rota para mostrar o formulário de cadastro de treinador
// router.get('/createNewTrainer', trainerController.showCreateTrainerForm);

// module.exports = router;

const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');

// Rota para exibir o formulário de cadastro do treinador
router.get('/createTrainer', trainerController.showCreateTrainerForm);

// Rota para processar o formulário de criação de treinador
router.post('/submitTrainer', trainerController.createTrainer);

module.exports = router;
