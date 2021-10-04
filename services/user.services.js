const { Users } = require('../models');
const bcrypt = require('bcrypt');

const userServices = {
    get: async (id) => {
        let status = null
        let error = null;
        let data = {};
        let users = await Users.findOne({
            where: { id }
        })
        
        try {
            if (users) {
                status = 200;
                let { name, email, mobile, newsLetter, createdAt, updatedAt} = users;
                data = { name, 
                            email, 
                            mobile, 
                            newsLetter, 
                            createdAt, 
                            updatedAt };
            } else {
                status = 404
            }
        } catch (e) {
            status = 500;
            error = e;
        }

        return { data, status, error }
    }, 
    post: async (datas) => {
        let status = null
        let error = null;
        let data = {};
        let { name, email, password, mobile, newsLetter } = datas;

        let senha = bcrypt.hashSync(password, 10);

        let checkEmail = await Users.findOne({ where: { email }})

        if (checkEmail) {
            status = 400;
            error = "Usuário/E-mail já cadastrado";
        } else {
            try {
                await Users.create({
                    name, 
                    email, 
                    password: senha,
                    mobile,
                    newsLetter
                });
                status = 201;
            } catch(e) {
                status = 500;
                error = e;
            }
        }

        return { data, status, error }
    }, 
    login: async (datas, session) => {
        let status = null
        let error = null;
        let data = {};
        let { email, password } = datas;

        let user = await Users.findOne({ where: { email }});

        try {
            if (user) {
                if (bcrypt.compareSync(password, user.password)) {
                    session.user = {
                        name: user.name,
                        email: user.email
                    }
                    status = 202;
                } else {
                    status = 404;
                    error = "Senha Inválida";
                }
            } else {
                status = 404;
            }
        } catch(e) {
            status = 500;
            error = e;
        }

        return { data, status, error }
    }
}

module.exports = userServices;