const { Router } = require("express");
const router = Router();
const reviewsController = require("../controllers/reviews.controller");


router.get("/", reviewsController.media);
router.get("/:id", reviewsController.reviews);
router.post("/:id", reviewsController.rating);


module.exports = router;
