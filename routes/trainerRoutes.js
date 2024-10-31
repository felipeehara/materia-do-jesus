
// const express = require('express');
// const router = express.Router();
// const trainerController = require('../controllers/trainerController');

// // Rota para mostrar o formulário de cadastro de treinador
// router.get('/createNewTrainer', trainerController.showCreateTrainerForm);

// module.exports = router;

const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');

// Rota para listar todos os treinadores
router.get('/', trainerController.getAllTrainers);

// Rota para renderizar o formulário de criação de treinador
router.get('/createTrainer', trainerController.createNewTrainer);

// Rota para processar o formulário de criação de treinador
router.post('/createTrainer', trainerController.storeNewTrainer);

module.exports = router;
