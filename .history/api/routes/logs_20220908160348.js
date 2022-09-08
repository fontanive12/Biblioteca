
const router = require('express').Router();
const LogModel = require('../models/Log');
const logsController = require('../controllers/LogsController');

const validateCityId = async (req, res, next) => {
  const log = await LogModel.findByPk(req.params.logId);
  if (!log) {
    return res.status(404).json({ error: 'log not found' });
  }
  next();
}

router.get('/logs', booksController.index);

router.post('/logs', booksController.create);

// router.get('/books/:bookId', validateCityId, booksController.show);

// router.put('/books/:bookId', validateCityId, booksController.update);

// router.delete('/books/:bookId', validateCityId, booksController.delete);

module.exports = router;