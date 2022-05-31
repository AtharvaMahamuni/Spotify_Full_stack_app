const express = require('express');
const {getArtistsList, getArtistWithId, addNewArtist, getTopTenArtists} = require('../controllers/artistController')

const router = express.Router();

// routes
router.route('/getAllArtists').get(getArtistsList);
router.route('/getArtistById/:artist_id').get(getArtistWithId);
router.route('/getTopTenArtists').get(getTopTenArtists);

router.route('/addArtist').post(addNewArtist);

// ...


module.exports = router;