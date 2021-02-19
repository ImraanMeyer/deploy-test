

//Export for use in ./controllers/image.controller.js
const express = require('express');
const router = express.Router();

const image = require('../controllers/image.controller.js');
router.post('/getImage', image.getImage);

module.exports = router;