
const router = require('express').Router();
const CityModel = require('../models/City');
const booksController = require('../controllers/BooksController');

const validateCityId = async (req, res, next) => {
  const city = await CityModel.findByPk(req.params.cityId);
  if (!city) {
    return res.status(404).json({ error: 'City not found' });
  }
  next();
}

router.get('/cities', booksController.index);

router.post('/cities', booksController.create);

router.get('/cities/:cityId', validateCityId, booksController.show);

router.put('/cities/:cityId', validateCityId, booksController.update);

router.delete('/cities/:cityId', validateCityId, booksController.delete);

module.exports = router;