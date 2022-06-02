const express = require('express');
const {getArtistsList, getArtistWithId, addNewArtist, getTopTenArtists, getArtistsBySongId} = require('../controllers/artistController')

const router = express.Router();

// routes
router.route('/getAllArtists').get(getArtistsList);
router.route('/getArtistById/:artist_id').get(getArtistWithId);
router.route('/getTopTenArtists').get(getTopTenArtists);
router.route('/getArtistsBySongId/:song_id').get(getArtistsBySongId);

router.route('/addArtist').post(addNewArtist);

// ...


module.exports = router;