
const router = require('express').Router();
const UserModel = require('../models/Category');
const usersController = require('../controllers/CategoriesController');

const validateUserId = async (req, res, next) => {
  const user = await UserModel.findByPk(req.params.userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  next();
}

router.get('/categories', usersController.index);

router.post('/categories', usersController.create);

router.get('/categories/:userId', validateUserId, usersController.show);

router.put('/categories/:userId', validateUserId, usersController.update);

router.delete('/categories/:userId', validateUserId, usersController.delete);

module.exports = router;