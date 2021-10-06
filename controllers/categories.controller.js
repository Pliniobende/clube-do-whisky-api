const categoriesServices = require('../services/categories.services');

const categoriesController = {

    categoria: async (req, res) => {
            try {
                const { id } = req.params;
    
                const { data, status, error } = await categoriesServices.get(id);
    
                error ? res.status(status).json(error) : res.status(status).json(data);
            } catch(e) {
                res.status(500).json(e);
            }
        }
        // let dados2 = await Posts.findAll({
        //     where: {
        //         id(FK)
        //     }
        // })
        // if (dados2){
        //     let { image, description} = dados;
        //     res.send({
        //     image,
        //     description
        // });
        // }else{
        //     res.status(404).send('Nenhum objeto encontrado');
        // }
};


module.exports = categoriesController;
