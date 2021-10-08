const categoriesServices = require("../services/categories.services");
const brandsServices = require("../services/brands.services");

const categoriesController = {
  categoria: async (req, res) => {
    try {
      const { id } = req.params;

      const { data, status, error } = await categoriesServices.get(id);

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },

  marca: async (req, res) => {
    try {
      const { id } = req.params;

      const { data, status, error } = await brandsServices.getAll(id);

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
};

module.exports = categoriesController;
