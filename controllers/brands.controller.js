const { Brands } = require('../models');
const { Reviews } = require('../models');
const brandsServices = require('../services/rating.services');

const brandsController = {
    brand: async (req, res) => {
        let { id } = req.params;
        let dados = await brands.findOne({
            where: {
                id
            }
        })
        if (dados){
            let { description, image } = dados;
            res.send({
            description,
            image
        });
        }else{
            res.status(404).send('Nenhum objeto encontrado');
        }
        let dados2 = await reviews.findAll({
            where: {
                id (PK)
            }
        })
        if (dados2){
            let { rating, description } = dados;
            res.send({
            rating,
            description,
            userId,
            postId,
            createdAt
        });
        }else{
            res.status(404).send('Nenhum objeto encontrado');
        }
    },
    rating: async (req, res) => {
            try {
                let datas = req.body;
    
                await brandsServices.post(datas, res);
            } catch(error) {
                res.status(500).json(error);
            }
        }

};

module.exports = brandsController;