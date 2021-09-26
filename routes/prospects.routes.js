const { Router } = require('express');
const router = Router();
const prospectsController = require('../controllers/prospects.controller');

router.get('/', prospectsController.getAll);
router.get('/:id', prospectsController.getById);
router.put('/:id', prospectsController.put);
router.delete('/:id', prospectsController.delete);

module.exports = router;