const { Op } = require('sequelize');
const BookModel = require('../models/Book');

class BooksController {

  index = async (req, res, next) => {
    const params = req.query;
    const limit = params.limit || 100;
    const page = params.page || 1;
    const offset = (page - 1) * limit;
    const sort = params.sort || 'id';
    const order = params.order || 'ASC';
    const where = {};

    if (params.name) {
      where.name = {
        [Op.iLike]: `%${params.name}%`
      };
    }

    const cities = await BookModel.findAll({
      where: where,
      limit: limit,
      offset: offset,
      order: [ [sort, order] ]
    });
    res.json(cities);
  }

  create = async (req, res, next) => {
    try {
      const data = await this._validateData(req.body);
      const book = await BookModel.create(data);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  show = async (req, res, next) => {
    const book = await BookModel.findByPk(req.params.cityId);
    res.json(book);
  }

  update = async (req, res, next) => {
    try {
      const id = req.params.cityId;
      const data = await this._validateData(req.body, id);
      await CityModel.update(data, {
        where: {
          id: id
        }
      });
      res.json(await BookModel.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  delete = async (req, res, next) => {
    await BookModel.destroy({
      where: {
        id: req.params.cityId
      }
    });
    res.json({});
  }

  _validateData = async (data, id) => {
    const attributes = ['name', 'states_id'];
    const book = {};
    for (const attribute of attributes) {
      if (! data[attribute]){
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      book[attribute] = data[attribute];
    }

    if (await this._checkIfNameExists(book.name, id)) {
      throw new Error(`The book with name "${book.name}" already exists.`);
    }

    return book;
  }

  _checkIfNameExists = async (name, id) => {
    const where = {
        name: name
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