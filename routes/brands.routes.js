const { Router } = require("express");
const router = Router();
const brandsController = require("../controllers/brands.controller");
const findAll = require ('../controllers/teste')

router.get("/id", brandsController.marca);
router.post("/:id", brandsController.ratingPost);
router.post("/:id", brandsController.ratingGet);

router.get("/", (req, res) => {
  console.log("Brand");
  res.send("Brand");
});

module.exports = router;
