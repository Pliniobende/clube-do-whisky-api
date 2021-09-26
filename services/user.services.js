const { Users } = require('../models')
const bcrypt = require('bcrypt');

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
    }, 
    put: async (datas, res) => {
        let { name, email, password, mobile, newsLetter } = datas;

        let senha = bcrypt.hashSync(password, 10);

        let checkEmail = await Users.findOne({ where: { email }})

        if (checkEmail) {
            res.status(404).json("Usuário/e-mail já cadastro!");
        } else {
            try {
                await Users.create({
                    name, 
                    email, 
                    password: senha,
                    mobile,
                    newsLetter
                })

                res.status(201).json('Usuario cadastrado com sucesso!!!')
            } catch(error) {
                res.status(500).json(`Error: ${error}`);
            }
        }
    }
}

module.exports = userServices;