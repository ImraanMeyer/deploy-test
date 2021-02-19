
//Export for use in ./controllers/image.controller.js

const express = require('express');
const router = express.Router();
const image = require('../controllers/image.controller.js');

router.post('/saveImage', image.uploadImage);

module.exports = router;