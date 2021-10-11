const { Categories } = require("../models");

const categoriesServices = {
  getOne: async (id) => {
    let data = {};
    let status = null;
    let error = null;
    let categorie = await Categories.findOne({
      where: { id },
    });

    try {
      if (categorie) {
        status = 200;
        let { name, description, detail } = categorie;
        data = {
          name,
          description,
          detail,
        };
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
};

module.exports = categoriesServices;