const { Router } = require('express');
const router = Router();
const prospectsController = require('../controllers/prospects.controller');

router.get('/', prospectsController.get);

module.exports = router;