const { Router } = require("express");
const router = Router();
const brandsController = require("../controllers/brands.controller");

router.get("/:id", brandsController.getAll);
router.post("/:id", brandsController.ratingPost);
router.post("/:id", brandsController.ratingGet);

router.get("/", (req, res) => {
  console.log("Brand");
  res.send("Brand");
});

module.exports = router;
