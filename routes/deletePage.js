
//Export for use in ./controllers/photoAlbum.controller.js

const express = require('express');
const router = express.Router();
const page = require('../controllers/photoAlbum.controller.js');

router.delete('/deletePage', page.deletePage);


module.exports = router;