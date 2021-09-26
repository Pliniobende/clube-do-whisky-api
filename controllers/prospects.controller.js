const prospectsServices = require('../services/prospects.service');

const prospectsController = {
    getAll: (req, res) => res.status(401).json('Unauthorized route'), 
    getById: (req, res) => res.status(401).json('Unauthorized route'),
    post: async (req, res) => {
        try {
            let datas = req.body;

            await prospectsServices.post(datas, res);
        } catch(error) {
            res.status(500).json(error);
        }
    },
    put: (req, res) => res.status(401).json('Unauthorized route'),
    delete: (req, res) => res.status(401).json('Unauthorized route')
}

module.exports = prospectsController;