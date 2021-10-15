const { Router } = require("express");
const router = Router();
const categoriesController = require("../controllers/categories.controller");

router.get("/:id", categoriesController.categoria);

module.exports = router;
