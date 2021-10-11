const brandsServices = require("../services/brands.services");
const reviewsServices = require("../services/reviews.services");

const brandsController = {
  marca: async (req, res) => {
    try {
      const { id } = req.params;

      const { data, status, error } = await brandsServices.getOne(id);
  
      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },

  getAll: async (req, res) => {
    try {
      const { id } = req.params;

      const { data, status, error } = await brandsServices.getAll(id);

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },

  ratingGet: async (req, res) => {
    try {
      const { id } = req.params;

      const { data, status, error } = await reviewsServices.ratingGet(id);

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },

  ratingPost: async (req, res) => {
    try {
      let datas = req.body;

      await reviewsServices.ratingPost(datas, res);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = brandsController;