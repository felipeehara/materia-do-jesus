
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Trainer = sequelize.define('Trainer', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Outros campos podem ser adicionados aqui
});

module.exports = Trainer;
