
const router = require('express').Router();
const PublisherModel = require('../models/Publisher');
const publishersController = require('../controllers/PublishersController');

const validatePublisherId = async (req, res, next) => {
  const city = await PublisherModel.findByPk(req.params.publisherId);
  if (!city) {
    return res.status(404).json({ error: 'City not found' });
  }
  next();
}

router.get('/publishers', publishersController.index);

router.post('/publishers', publishersController.create);

router.get('/publishers/:publisherId', validatePublisherId, publishersController.show);

router.put('/publishers/:publisherId', validatePublisherId, publishersController.update);

router.delete('/publishers/:publisherId', validatePublisherId, publishersController.delete);

module.exports = router;