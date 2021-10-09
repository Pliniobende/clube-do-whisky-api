const { Prospects } = require("../models");

const prospectsServices = {
  post: async (datas) => {
    let status = null;
    let error = null;
    let data = {};
    let { name, email, message, replied } = datas;

    try {
      await Prospects.create({
        name,
        email,
        message,
        replied,
      });

      status = 201;
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
};

module.exports = prospectsServices;
