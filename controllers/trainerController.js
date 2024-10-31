exports.showCreateTrainerForm = (req, res) => {
    res.render('createNewTrainer'); // Renderiza a página de cadastro do treinador
};

exports.createTrainer = async (req, res) => {
    try {
        const { name } = req.body;
        await Trainer.create({ name }); // Salva no banco de dados, se houver um modelo configurado
        res.redirect('/'); // Redireciona para a página principal ou onde desejar
    } catch (error) {
        res.status(500).send('Erro ao cadastrar treinador');
    }
};
