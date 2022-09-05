
const router = require('express').Router();
const UserModel = require('../models/City');
const usersController = require('../controllers/CitiesController');

const validateUserId = async (req, res, next) => {
  const user = await UserModel.findByPk(req.params.userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  next();
}

router.get('/cities', usersController.index);

router.post('/cities', usersController.create);

router.get('/cities/:userId', validateUserId, usersController.show);

router.put('/cities/:userId', validateUserId, usersController.update);

router.delete('/cities/:userId', validateUserId, usersController.delete);

module.exports = router;