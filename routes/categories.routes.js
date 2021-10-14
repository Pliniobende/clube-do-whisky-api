const { Router } = require("express");
const router = Router();
const categoriesController = require("../controllers/categories.controller");

/*router.get("/:id", categoriesController.categoria);*/
router.get("/:id", categoriesController.marca);
router.get("/", categoriesController.allCategories);
module.exports = router;
