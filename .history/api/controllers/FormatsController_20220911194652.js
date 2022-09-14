// const { Op } = require('sequelize');
// const FormatModel = require('../models/Format')
// const axios = require('axios')

// class FormatsController {

//   index = async (req, res, next) => {
//     const params = req.query;
//     const limit = params.limit || 100;
//     const page = params.page || 1;
//     const offset = (page - 1) * limit;
//     const sort = params.sort || 'id';
//     const order = params.order || 'ASC';
//     const where = {};

//     if (params.description) {
//       where.description = {
//         [Op.iLike]: `%${params.description}%`
//       };
//     }

//     const formats = await FormatModel.findAll({
//       where: where
//     });
//     res.json(formats);
//   }

//   create = async (req, res, next) => {
//     try {
//       const data = await this._validateData(req.body);
//       const format = await FormatModel.create(data);
//       LogModel.create({
//         description: 'Format ' + format.description + ' created.',
//       });
//       res.json(format);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   }

//   show = async (req, res, next) => {
//     const format = await FormatModel.findByPk(req.params.formatId);
//     res.json(format);
//   }

//   update = async (req, res, next) => {
//     try {
//       const id = req.params.formatId;
//       const data = await this._validateData(req.body, id);
//       await FormatModel.update(data, {
//         where: {
//           id: id
//         }
//       });
//       LogModel.create({
//         description: 'Format ' + req.body.description + ' updated.',
//       });
//       res.json(await FormatModel.findByPk(id));
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   }

//   delete = async (req, res, next) => {
//     const format = await getFormat(id);
//     const data = format.data;
//     await FormatModel.destroy(data,{
//       where: {
//         id: req.params.formatId
//       }
//     });
//     LogModel.create({
//       description: 'Format ' + data.description + 'deleted.',
//     });
//     res.json({});
//   }

//   _validateData = async (data, id) => {
//     const attributes = ['description'];
//     const format = {};
//     for (const attribute of attributes) {
//       if (!data[attribute]) {
//         throw new Error(`The attribute "${attribute}" is required.`);
//       }
//       format[attribute] = data[attribute];
//     }

//     if (await this._checkIfEmailExists(format.description, id)) {
//       throw new Error(`The format "${format.description}" already exists.`);
//     }

//     return format;
//   }

//   _checkIfEmailExists = async (description, id) => {
//     const where = {
//       description: description
//     };

//     if (id) {
//       where.id = { [Op.ne]: id }; // WHERE id != id
//     }

//     const count = await FormatModel.count({
//       where: where
//     });

//     return count > 0;
//   }
// }

// module.exports = new FormatsController();

const { Op } = require('sequelize');
const CategoryModel = require('../models/Format');
const axios = require('axios')

class CategoriesController {

  index = async (req, res, next) => {
    const params = req.query;
    const limit = params.limit || 100;
    const page = params.page || 1;
    const offset = (page - 1) * limit;
    const sort = params.sort || 'id';
    const order = params.order || 'ASC';
    const where = {};

    if (params.description) {
      where.description = {
        [Op.iLike]: `%${params.description}%`
      };
    }

    const categories = await CategoryModel.findAll({
      where: where
    });
    res.json(categories);
  }

  create = async (req, res, next) => {
    try {
      const data = await this._validateData(req.body);
      const category = await CategoryModel.create(data);
      LogModel.create({
        description: 'Category ' + category.description + ' created.',
      });
      res.json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  show = async (req, res, next) => {
    const category = await CategoryModel.findByPk(req.params.categoryId);
    res.json(category);
  }

  update = async (req, res, next) => {
    try {
      const id = req.params.categoryId;
      const data = await this._validateData(req.body, id);
      await CategoryModel.update(data, {
        where: {
          id: id
        }
      });
      LogModel.create({
        description: 'Category ' + req.body.description + ' updated.',
      });
      res.json(await CategoryModel.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  delete = async (req, res, next) => {
    const category = await getCategory(id);
    const data = category.data;
    await CategoryModel.destroy(data,{
      where: {
        id: req.params.categoryId
      }
    });
    LogModel.create({
      description: 'Category ' + data.description + 'deleted.',
    });
    res.json({});
  }

  _validateData = async (data, id) => {
    const attributes = ['description'];
    const category = {};
    for (const attribute of attributes) {
      if (!data[attribute]) {
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      category[attribute] = data[attribute];
    }

    if (await this._checkIfEmailExists(category.description, id)) {
      throw new Error(`The category "${category.description}" already exists.`);
    }

    return category;
  }

  _checkIfEmailExists = async (description, id) => {
    const where = {
      description: description
    };

    if (id) {
      where.id = { [Op.ne]: id }; // WHERE id != id
    }

    const count = await CategoryModel.count({
      where: where
    });

    return count > 0;
  }
}

module.exports = new CategoriesController();