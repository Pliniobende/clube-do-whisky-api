const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user.controller");
const { usersSchema, loginSchema } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchema");
var jwt = require("jsonwebtoken");
var config = require("../middlewares/config");

router.post("/login", middleware(loginSchema), userController.login);
router.post("/", middleware(usersSchema), userController.post);

router.use(function (req, res, next) {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      res.status(401).json("No token provides");
    }

    jwt.verify(token, config.secret, function (err) {
      if (err)
        return res
          .status(401)
          .json({ auth: false, message: "Failed to authenticate token." });

      next();
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.put("/:id", userController.put);
router.delete("/:id", userController.delete);

module.exports = router;
