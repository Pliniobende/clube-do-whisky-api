const { Users } = require("../models");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { secret } = require("../middlewares/config");
const emailService = require("./email.service");

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
          email: users.email,
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

    const senha = bcrypt.hashSync(password, 10);

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
  put: async (email, password) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const user = await Users.findOne({ where: { email } });

      if (user) {
        const response = await Users.update(
          {
            password: bcrypt.hashSync(password, 10),
          },
          { where: { email } }
        );

        console.log(response);
        status = 200;
      } else {
        status = 404;
      }
    } catch (e) {
      status = 500;
      error = e;
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

          data = {
            auth: true,
            token,
            name: user.name,
            email: user.email,
            id: user.id,
          };
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
    console.log(data);
    return { data, status, error };
  },
  logout: async () => {
    let status = null;
    let error = null;
    let data = {};

    status = 200;
    data = { auth: false, token: "", name: "", email: "", id: "" };

    return { data, status, error };
  },
  recoverPassword: async (email) => {
    let status = null;
    let error = null;
    let data = {};

    const password = "@dmin123";
    const senha = bcrypt.hashSync(password, 10);

    try {
      const user = await Users.findOne({ where: { email } });

      if (user) {
        console.log("senha => ", senha);
        await Users.update(
          {
            password: senha,
          },
          { where: { id: user.id } }
        );

        const sendEmail = await emailService.sendEmail(email, password);

        status = 200;
      }
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
};

module.exports = userServices;
