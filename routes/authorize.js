

//Export for use in ./controllers/userAuth.controller.js

const express = require('express');
const auth = require('../controllers/userAuth.controller.js');
const router = express.Router();

router.post('/auth', auth.authorize);

module.exports = router;