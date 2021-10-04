const categoriesController = {

    categoria: async (req, res) => {
        let { id } = req.params;
        let dados = await Categories.findOne({
            where: {
                id
            }
        })
        if (dados){
            let { name, description, detail} = dados;
            res.send({
            name,
            description,
            detail
        });
        }else{
            res.status(404).send('Nenhum objeto encontrado');
        }
        let dados2 = await Posts.findOne({
            where: {
                id
            }
        })
        if (dados2){
            let { image, description} = dados;
            res.send({
            image,
            description
        });
        }else{
            res.status(404).send('Nenhum objeto encontrado');
        }
    }
};


module.exports = categoriesController;
