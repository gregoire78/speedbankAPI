var express = require('express');
var router = express.Router();
var Users = require('../controllers/Users');

/* GET users listing. */
router.post('/', Users.create);
router.post('/authenticate', Users.authenticate);

module.exports = router;
