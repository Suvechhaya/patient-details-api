const router = require('express').Router();
const bodyParser = require('body-parser');
const authController = require('../controllers/auth');

let jsonParser = bodyParser.json();

router.post('/register', jsonParser, authController.signup);

router.post('/login', jsonParser, authController.login);

module.exports = router;
