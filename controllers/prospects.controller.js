const prospectsServices = require("../services/prospects.service");

const prospectsController = {
  getAll: (req, res) => res.status(401).json("Unauthorized route"),
  getById: (req, res) => res.status(401).json("Unauthorized route"),
  post: async (req, res) => {
    try {
      let datas = req.body;

      const { data, status, error } = await prospectsServices.post(datas, res);

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  put: (req, res) => res.status(401).json("Unauthorized route"),
  delete: (req, res) => res.status(401).json("Unauthorized route"),
};

module.exports = prospectsController;
