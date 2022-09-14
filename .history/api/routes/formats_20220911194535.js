// const router = require('express').Router();
// const FormatModel = require('../models/Format');
// const formatsController = require('../controllers/FormatsController');


// const validateFormatId = async (req, res, next) => {
//   const format = await FormatModel.findByPk(req.params.formatId);
//   if (!format) {
//     return res.status(404).json({ error: 'format not found' });
//   }
//   next();
// }

// router.get('/formats', formatsController.index);

// router.post('/formats', formatsController.create);

// router.get('/formats/:formatId', validateFormatId, formatsController.show);

// router.put('/formats/:formatId', validateFormatId, formatsController.update);

// router.delete('/formats/:formatId', validateFormatId, formatsController.delete);

// module.exports = router;


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