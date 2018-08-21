var express = require('express');
var router = express.Router();
const { register,getAllUser } = require('../controllers/user-controller')

router.post('/register', register)
router.get('/', getAllUser)

module.exports = router;
