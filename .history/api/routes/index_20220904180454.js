const cors = require('cors');
const router = require('express').Router();
const users = require('./users');
const categories = require('./categories');
const states = require('./teste');

router.use(cors());

router.use(users);
router.use(categories);
router.use(states);

module.exports = router;