const { Router } = require("express");
const router = Router();
const reviewsController = require("../controllers/reviews.controller");


router.get("/", reviewsController.media);


module.exports = router;
