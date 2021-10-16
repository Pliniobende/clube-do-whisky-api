const { Users } = require("../models");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { secret } = require("../middlewares/config");

const userServices = {
  get: async (id) => {
    let status = null;
    let error = null;
    let data = {};
    let users = await Users.findOne({ where: { id } });

    try {
      if (users) {
        status = 200;
        data = {
          id: users.id,
          name: users.name,
          email: users.name,
          mobile: users.mobile,
          newsLetter: users.newsLetter,
        };
      } else {
        status = 404;
      }
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
  post: async (datas) => {
    let status = null;
    let error = null;
    let data = {};
    let { name, email, password, mobile, newsLetter } = datas;

    let senha = bcrypt.hashSync(password, 10);

    let checkEmail = await Users.findOne({ where: { email } });

    if (checkEmail) {
      status = 400;
      error = "Usuário/E-mail já cadastrado";
    } else {
      try {
        const response = await Users.create({
          name,
          email,
          password: senha,
          mobile,
          newsLetter,
        });

        var token = jwt.sign({ id: response.id }, secret, { expiresIn: 3600 });

        data = {
          auth: true,
          token,
          name: response.name,
          email: response.email,
        };
        status = 201;
      } catch (e) {
        status = 500;
        error = e;
      }
    }

    return { data, status, error };
  },
  login: async (datas, session) => {
    let status = null;
    let error = null;
    let data = {};
    let { email, password } = datas;

    let user = await Users.findOne({ where: { email } });

    try {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          session.user = {
            name: user.name,
            email: user.email,
          };

          var token = jwt.sign({ id: user.id }, secret, {
            expiresIn: 3600,
          });

          data = { auth: true, token, name: user.name, email: user.email };
          status = 202;
        } else {
          status = 404;
          error = "Senha Inválida";
        }
      } else {
        status = 404;
      }
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
  logout: () => {
    let status = null;
    let error = null;
    let data = {};
    data = { auth: false, token: "", name: "", email: "" };
    status = 200;
    return { data, status, error };
  },
};

module.exports = userServices;
