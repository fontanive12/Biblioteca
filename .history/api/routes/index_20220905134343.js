const cors = require('cors');
const router = require('express').Router();
const users = require('./users');
const categories = require('./categories');
const states = require('./states');
const cities = require('./cities');

router.use(cors());

router.use(users);
router.use(categories);
router.use(states);
router.use(cities);

module.exports = router;