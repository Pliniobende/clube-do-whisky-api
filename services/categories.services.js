
const { Categories, Brands, Reviews } = require("../models");


const categoriesServices = {
  getOne: async (id) => {
    let data = {};
    let status = null;
    let error = null;

    let categorie = await Categories.findOne({
      where: { id },
    });



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

  getAll: async () => {
    let data = {};
    let status = null;
    let error = null;
    let categorie = await Categories.findAll();
   
    try {
      if (categorie) {
        status = 200;
        data = categorie
      } else {
        status = 404;
        res.send("Sem retorno");
      }
    } catch (e) {
      status = 500;
      error = e;
      console.log(error);
    }

    return { data, status, error };
  },

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