const { Router } = require("express");
const router = Router();
const categoriesController = require("../controllers/categories.controller");

router.get("/:id", categoriesController.categoria);
router.get("/:id", categoriesController.marca);

module.exports = router;
