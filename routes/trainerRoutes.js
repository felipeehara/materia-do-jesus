const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');

router.get('/', trainerController.getAllTrainers);

router.get('/createTrainer', trainerController.createNewTrainer);

router.post('/createTrainer', trainerController.storeNewTrainer);

module.exports = router;
