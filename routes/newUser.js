

//Export for use in ./controllers/userAuth.controller.js

const express = require('express');
const router = express.Router();
const newUser = require('../controllers/userAuth.controller.js');

router.post('/newUser', newUser.createUser);


module.exports = router;