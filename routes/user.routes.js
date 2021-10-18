const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user.controller");
const auth = require("../middlewares/auth");
const { usersSchema, loginSchema } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchema");

router.post("/login", middleware(loginSchema), userController.login);
router.post("/logout", userController.logout);
router.post("/", middleware(usersSchema), userController.post);

router.use(auth);
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.put("/:id", userController.put);
router.delete("/:id", userController.delete);

module.exports = router;
