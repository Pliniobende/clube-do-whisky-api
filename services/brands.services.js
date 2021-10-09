const { Categories } = require("../models");
const { Brands } = require("../models");

const brandsServices = {
  getAll: async (id) => {
    let status = null;
    let error = null;
    let data = {};
    let brands = await Brands.findAll({
      where: {categoriesId: id}
    }
    );
    consol.log(brands)

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
  getOne: async (id) => {
    let data = {};
    let status = null;
    let error = null;
    let brand = Brands.findOne({
      where: { id },
    });

    try {
      if (brand) {
        status = 200;
        let { image, description } = brand;
        data = {
          image,
          description,
        };
      } else {
        status = 404;
        res.send("Brand não encontrada");
      }
    } catch (e) {
      status = 500;
      error = e;
      console.log(error);
    }

    return { data, status, error };
  },
};

module.exports = brandsServices;
