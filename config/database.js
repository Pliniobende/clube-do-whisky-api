require("dotenv").config();

const config = {
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
  host: process.env.host,
  dialect: process.env.dialect,
};

module.exports = config;
