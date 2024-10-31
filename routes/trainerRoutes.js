
const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');

// Rota para mostrar o formulário de cadastro de treinador
router.get('/createNewTrainer', trainerController.showCreateTrainerForm);

module.exports = router;
