

//Export for use in ./controllers/photoAlbum.controller.js

// Instead of exporting the routes like above, consider doing the following:
// We first require express -> then the router from express
// then we apply the request type on the router and export the router

// You would do this for all your routes

const express = require('express');
const router = express.Router();
const page = require('../controllers/photoAlbum.controller.js');

router.post('/addPage', page.addPage)

module.exports = router;