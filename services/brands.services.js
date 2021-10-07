const { Categories } = require("../models");
const { Brands } = require("../models");

const brandsServices = {
  get: async (id) => {
    let status = null;
    let error = null;
    let data = {};
    let brands = await Brands.findAll({
      include: {
        model: Categories[id],
        as: "Categories",
        required: true,
      },
    });

    try {
      if (brands) {
        let { image, description } = brands;
        data = {
          image,
          description,
        };
      } else {
        status = 404;
        res.send("Nenhuma marca encontrada");
      }
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
};

module.exports = brandsServices;
