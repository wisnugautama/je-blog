var express = require('express');
var router = express.Router();
const { register,login, getMe } = require('../controllers/user-controller')

router.post('/register', register)
router.post('/login', login)
router.get('/', getMe)

module.exports = router;
