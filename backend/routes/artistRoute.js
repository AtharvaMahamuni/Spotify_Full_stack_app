const express = require('express');
const {getArtistsList} = require('../controllers/artistController')

const router = express.Router();

router.route('/getAllArtists').get(getArtistsList);

module.exports = router;