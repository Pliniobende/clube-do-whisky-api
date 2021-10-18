const { response } = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const emailService = {
  sendEmail: async (email, password) => {
    let status = null;
    let error = null;
    let data = {};
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    transporter
      .sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Recuperação de Senha - Clube Wisky",
        text:
          "Estamos e enviando a sua senha para acesso ao nosso. Sua nova senha é: " +
          password,
      })
      .then((response) => {
        status = 200;
        data = response;
      })
      .catch((e) => {
        status = 500;
        error = e;
      });

    return { data, status, error };
  },
};

module.exports = emailService;
