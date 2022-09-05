
const router = require('express').Router();
const StateModel = require('../models/States');
const statesController = require('../controllers/StatesController');

const validateUserId = async (req, res, next) => {
  const state = await StateModel.findByPk(req.params.stateId);
  if (!state) {
    return res.status(404).json({ error: 'User not found' });
  }
  next();
}

router.get('/states', statesController.index);

router.post('/states', statesController.create);

router.get('/states/:stateId', validateUserId, statesController.show);

router.put('/states/:stateId', validateUserId, statesController.update);

router.delete('/states/:stateId', validateUserId, statesController.delete);

module.exports = router;