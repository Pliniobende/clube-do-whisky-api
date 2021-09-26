const userServices = require('../services/user.services');

const userController = {
    getAll: (req, res) => res.status(401).json('Unauthorized route'),
    getById: async (req, res) => {
        try {
            const {id} = req.params;

            await userServices.get(id, res);
        } catch(error) {
            res.status(500).json(error);
        }
    }, 
    post: async (req, res) => {
        try {
            let datas = req.body;

            await userServices.put(datas, res)
        } catch(error) {
            res.status(500).json(error);
        }
    },
    put: (req, res) => res.status(401).json('Unauthorized route'),
    delete: (req, res) => res.status(401).json('Unauthorized route'),
    login: async (req, res) => {
        try {
            let datas = req.body;

            await userServices.login(datas, req.session ,res);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = userController;