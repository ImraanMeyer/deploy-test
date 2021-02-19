//Update page in photo album

//Export for use in ./controllers/photoAlbum.controller.js
const express = require('express');
const router = express.Router();
const album = require('../controllers/photoAlbum.controller.js');

router.put('/updatePage', album.updatePage);



module.exports = router;