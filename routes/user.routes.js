const { Router } = require('express');
const router = Router();
const userController = require('../controllers/user.controller');
const { usersSchema } = require('../middlewares/schemas');
const middleware = require('../middlewares/validationSchema');

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', middleware(usersSchema) ,userController.post);

module.exports = router;