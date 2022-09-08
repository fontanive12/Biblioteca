
const router = require('express').Router();
const LogModel = require('../models/Log');
const logsController = require('../controllers/LogsController');




router.post('/logs', logsController.create);

// router.get('/books/:bookId', validateCityId, booksController.show);

// router.put('/books/:bookId', validateCityId, booksController.update);

// router.delete('/books/:bookId', validateCityId, booksController.delete);

module.exports = router;