const { Prospects } = require('../models');

const prospectsServices = {
    post: async (datas, res) => {
        let { name, email, message, replied } = datas;

        try {
            await Prospects.create({
                name, 
                email, 
                message, 
                replied
            });

            res.status(201).json('Prospect cadastrado com sucesso!!!');
        } catch(error) {
            res.status(500).json(error);
        }
    }
}

module.exports = prospectsServices;