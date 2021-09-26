const { Router } = require('express');
const router = Router();
const userController = require('../controllers/user.controller');
const { usersSchema, loginSchema } = require('../middlewares/schemas');
const middleware = require('../middlewares/validationSchema');

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', middleware(usersSchema) ,userController.post);
router.post('/login', middleware(loginSchema), userController.login);
router.put('/:id', userController.put);
router.delete('/:id', userController.delete);

module.exports = router;