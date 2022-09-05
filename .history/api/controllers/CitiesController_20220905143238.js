const { Op } = require('sequelize');
const CityModel = require('../models/City');

class CitiesController {

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

    const cities = await CityModel.findAll({
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
      const user = await CityModel.create(data);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  show = async (req, res, next) => {
    const user = await CityModel.findByPk(req.params.userId);
    res.json(user);
  }

  update = async (req, res, next) => {
    try {
      const id = req.params.userId;
      const data = await this._validateData(req.body, id);
      await CityModel.update(data, {
        where: {
          id: id
        }
      });
      res.json(await CityModel.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  delete = async (req, res, next) => {
    await CityModel.destroy({
      where: {
        id: req.params.userId
      }
    });
    res.json({});
  }

  _validateData = async (data, id) => {
    const attributes = ['name', 'states_id'];
    const user = {};
    for (const attribute of attributes) {
      if (! data[attribute]){
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      user[attribute] = data[attribute];
    }

    // if (await this._checkIfEmailExists(user.email, id)) {
    //   throw new Error(`The user with mail address "${user.email}" already exists.`);
    // }

    return user;
  }

//   _checkIfEmailExists = async (email, id) => {
//     const where = {
//       email: email
//     };

//     if (id) {
//       where.id = { [Op.ne]: id }; // WHERE id != id
//     }

//     const count = await UserModel.count({
//       where: where
//     });

//     return count > 0;
//   }

}

module.exports = new CitiesController();