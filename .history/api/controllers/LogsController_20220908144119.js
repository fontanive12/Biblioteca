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
  }
}

module.exports = new LogsController();