
// const router = require('express').Router();
// const BookModel = require('../models/Book');
// const booksController = require('../controllers/BooksController');

// const validateCityId = async (req, res, next) => {
//   const city = await BookModel.findByPk(req.params.bookId);
//   if (!city) {
//     return res.status(404).json({ error: 'Book not found' });
//   }
//   next();
// }

// router.get('/books', booksController.index);

// router.post('/books', booksController.create);

// router.get('/books/:bookId', validateCityId, booksController.show);

// router.put('/books/:bookId', validateCityId, booksController.update);

// router.delete('/books/:bookId', validateCityId, booksController.delete);

// module.exports = router;