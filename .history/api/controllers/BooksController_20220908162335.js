const { Op } = require('sequelize');
const BookModel = require('../models/Book');
const CategoryModel = require('../models/Category');
const PublisherModel = require('../models/Publisher');
const db = require('../db');
class BooksController {

  index = async (req, res, next) => {
   
    const books = await BookModel.findAll({
      include: [{
        model: PublisherModel,
        required: false,
        attributes: ['name']
      },{
        model: CategoryModel,
        required: false,
        attributes: ['description']
      }]
    });
    res.json(books);
  }

  create = async (req, res, next) => {
    try {
      const data = await this._validateData(req.body);
      const book = await BookModel.create(data);
      LogModel.create({
        description: 'Book created.',
      });
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  show = async (req, res, next) => {
    const book = await BookModel.findByPk(req.params.bookId);
    res.json(book);
  }

  update = async (req, res, next) => {
    try {
      const id = req.params.bookId;
      const data = await this._validateData(req.body, id);
      await BookModel.update(data, {
        where: {
          id: id
        }
      });
      LogModel.create({
        description: 'Book updated.',
      });
      res.json(await BookModel.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  delete = async (req, res, next) => {
    await BookModel.destroy({
      where: {
        id: req.params.bookId
      }
    });
    LogModel.create({
      description: 'Book deleted.',
    });
    res.json({});
  }

  _validateData = async (data, id) => {
    const attributes = ['title', 'author', 'publication_year', 'pages', 'CategoryId', 'PublisherId'];
    const book = {};
    for (const attribute of attributes) {
      if (! data[attribute]){
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      book[attribute] = data[attribute];
    }

    if (await this._checkIfTitleExists(book.title, id)) {
      throw new Error(`The book with title "${book.title}" already exists.`);
    }

    return book;
  }

  _checkIfTitleExists = async (title, id) => {
    const where = {
      title: title
    };

    if (id) {
      where.id = { [Op.ne]: id }; // WHERE id != id
    }

    const count = await BookModel .count({
      where: where
    });

    return count > 0;
  }

}

module.exports = new BooksController();