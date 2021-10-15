const { Categories, Brands } = require("../models");

const categoriesServices = {
  get: async (id) => {
    let data = {};
    let status = null;
    let error = null;

    try {
      let categorie = await Categories.findAll({
        where: { detail: id },
        include: {
          model: Brands,
          as: "brands",
          require: true,
        },
      });

      categorie ? ((status = 200), (data = categorie)) : (status = 404);
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
};

module.exports = categoriesServices;
