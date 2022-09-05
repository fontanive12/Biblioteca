// const { Op } = require('sequelize');
// const CategoryModel = require('../models/Category');

// class CategoriesController {

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

//     const categories = await CategoryModel.findAll({
//       where: where,
//       limit: limit,
//       offset: offset,
//       order: [ [sort, order] ]
//     });
//     res.json(categories);
//   }

//   create = async (req, res, next) => {
//     try {
//       const data = await this._validateData(req.body);
//       const category = await CategoryModel.create(data);
//       res.json(category);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   }

//   show = async (req, res, next) => {
//     const category = await CategoryModel.findByPk(req.params.categoryId);
//     res.json(category);
//   }

//   update = async (req, res, next) => {
//     try {
//       const id = req.params.categoryId;
//       const data = await this._validateData(req.body, id);
//       await CategoryModel.update(data, {
//         where: {
//           id: id
//         }
//       });
//       res.json(await CategoryModel.findByPk(id));
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   }

//   delete = async (req, res, next) => {
//     await CategoryModel.destroy({
//       where: {
//         id: req.params.categoryId
//       }
//     });
//     res.json({});
//   }

//   _validateData = async (data, id) => {
//     const attributes = ['description'];
//     const category = {};
//     for (const attribute of attributes) {
//       if (! data[attribute]){
//         throw new Error(`The attribute "${attribute}" is required.`);
//       }
//       category[attribute] = data[attribute];
//     }

//     if (await this._checkIfCategoryExists(category.description, id)) {
//       throw new Error(`The category with description "${category.description}" already exists.`);
//     }

//     return category;
//   }

//   _checkIfCategoryExists = async (description, id) => {
//     const where = {
//         description: description
//     };

//     if (id) {
//       where.id = { [Op.ne]: id }; // WHERE id != id
//     }

//     const count = await CategoryModel.count({
//       where: where
//     });

//     return count > 0;
//   }

// }

module.exports = new CategoriesController();


const { Op } = require('sequelize');
const CategoryModel = require('../models/Category');

class CategoriesController {
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

    if (params.email) {
      where.email = {
        [Op.iLike]: `%${params.email}%`
      };
    }

    if (params.min_age) {
      where.age = {
        [Op.gte]: params.min_age
      };
    }

    if (params.max_age) {
      if (! where.age) {
        where.age = {};
      }
      where.age[Op.lte] = params.max_age;
    }

    if (params.sex) {
      where.sex = params.sex;
    }

    const users = await UserModel.findAll({
      where: where,
      limit: limit,
      offset: offset,
      order: [ [sort, order] ]
    });
    res.json(users);
  }

  create = async (req, res, next) => {
    try {
      const data = await this._validateData(req.body);
      const user = await UserModel.create(data);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  show = async (req, res, next) => {
    const user = await UserModel.findByPk(req.params.userId);
    res.json(user);
  }

  update = async (req, res, next) => {
    try {
      const id = req.params.userId;
      const data = await this._validateData(req.body, id);
      await UserModel.update(data, {
        where: {
          id: id
        }
      });
      res.json(await UserModel.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  delete = async (req, res, next) => {
    await UserModel.destroy({
      where: {
        id: req.params.userId
      }
    });
    res.json({});
  }

  _validateData = async (data, id) => {
    const attributes = ['name', 'age', 'sex', 'email'];
    const user = {};
    for (const attribute of attributes) {
      if (! data[attribute]){
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      user[attribute] = data[attribute];
    }

    if (await this._checkIfEmailExists(user.email, id)) {
      throw new Error(`The user with mail address "${user.email}" already exists.`);
    }

    return user;
  }

  _checkIfEmailExists = async (email, id) => {
    const where = {
      email: email
    };

    if (id) {
      where.id = { [Op.ne]: id }; // WHERE id != id
    }

    const count = await UserModel.count({
      where: where
    });

    return count > 0;
  }
}

module.exports = new CategoriesController();