const { Router } = require("express");
const router = Router();
const prospectsController = require("../controllers/prospects.controller");
const { prospectsSchema } = require("../middlewares/schemas");
const middleware = require("../middlewares/validationSchema");

router.get("/", prospectsController.getAll);
router.get("/:id", prospectsController.getById);
router.post("/", middleware(prospectsSchema), prospectsController.post);
router.put("/:id", prospectsController.put);
router.delete("/:id", prospectsController.delete);

module.exports = router;
