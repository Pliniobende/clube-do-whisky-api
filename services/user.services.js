const { Users } = require('../models')

const userServices = {
    get: async (id, res) => {

        let users = await Users.findOne({
            where: { id }
        })
        
        if (users) {
            let { name, email, mobile, newsLetter, createdAt, updatedAt} = users;
            res.status(200).json({ name, 
                                email, 
                                mobile, 
                                newsLetter, 
                                createdAt, 
                                updatedAt });
        } else {
            res.status(404).json('Not Found');
        }
    }
}

module.exports = userServices;