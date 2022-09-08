const { Op } = require('sequelize');
const LogModel = require('../models/Log');
const db = require('../db');
class LogsController {

  index = async (req, res, next) => {


    create = async (req, res, next) => {
      try {
        const data = await this._validateData(req.body);
        const log = await LogModel.create(data);
        res.json(log);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }

    show = async (req, res, next) => {
      const log = await LogModel.findByPk(req.params.logId);
      res.json(log);
    }

    update = async (req, res, next) => {
      try {
        const id = req.params.logId;
        const data = await this._validateData(req.body, id);
        await LogModel.update(data, {
          where: {
            id: id
          }
        });
        res.json(await LogModel.findByPk(id));
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
}

module.exports = new LogsController();