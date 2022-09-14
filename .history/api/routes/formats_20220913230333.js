
const router = require('express').Router();
const FormatModel = require('../models/Format');
const formatsController = require('../controllers/FormatsController');


const validateCategoryId = async (req, res, next) => {
  const category = await FormatModel.findByPk(req.params.categoryId);
  if (!category) {
    return res.status(404).json({ error: 'category not found' });
  }
  next();
}

router.get('/formats', formatsController.index);

router.post('/formats', formatsController.create);

router.get('/formats/:categoryId', validateCategoryId, formatsController.show);

router.put('/formats/:categoryId', validateCategoryId, formatsController.update);

router.delete('/formats/:categoryId', validateCategoryId, formatsController.delete);

module.exports = router;