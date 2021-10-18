const userServices = require("../services/user.services");

const userController = {
  getAll: (req, res) => res.status(401).json("Unauthorized route"),
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const { data, status, error } = await userServices.get(id);

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  post: async (req, res) => {
    try {
      let datas = req.body;

      const { data, status, error } = await userServices.post(datas);

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  put: async (req, res) => {
    try {
      let datas = req.body;

      const { data, status, error } = await userServices.put(datas);

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  delete: (req, res) => res.status(401).json("Unauthorized route"),
  login: async (req, res) => {
    try {
      let datas = req.body;

      const { data, status, error } = await userServices.login(
        datas,
        req.session,
        res
      );

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  logout: async (req, res) => {
    try {
      const { data, status, error } = await userServices.logout();

      res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  recoverPassword: async (req, res) => {
    try {
      const { email } = req.body;

      const { data, status, error } = await userServices.recoverPassword(email);

      error ? res.status(500).json(e) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
};

module.exports = userController;
