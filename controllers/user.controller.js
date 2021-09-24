const userServices = require('../services/user.services');

const userController = {
    getAll: (req, res) => {
        res.status(401).json('Unauthorized route')
    },
    getById: async (req, res) => {
        try {
            const {id} = req.params;

            await userServices.get(id, res);
        } catch(error) {
            res.status(500).json(error);
        }
    }, 
    post: (req, res) => {
        try {

        } catch(error) {
            res.status(500).json(error);
        }
    }
}

module.exports = userController;