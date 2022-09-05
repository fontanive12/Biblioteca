const router = require('express').Router();
const CategoryModel = require('../models/teste');
const categoriesController = require('../controllers/teste');


const validateCategoryId = async (req, res, next) => {
  const category = await CategoryModel.findByPk(req.params.categoryId);
  if (!category) {
    return res.status(404).json({ error: 'category not found' });
  }
  next();
}

router.get('/states', categoriesController.index);

router.post('/states', categoriesController.create);

router.get('/states/:categoryId', validateCategoryId, categoriesController.show);

router.put('/states/:categoryId', validateCategoryId, categoriesController.update);

router.delete('/states/:categoryId', validateCategoryId, categoriesController.delete);

module.exports = router;