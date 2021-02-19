
//Export for use in ./controllers/userAuth.controller.js

const express = require('express');
const router = express.Router();

const login = require('../controllers/userAuth.controller.js');
router.post('/login', login.login);

module.exports = router;