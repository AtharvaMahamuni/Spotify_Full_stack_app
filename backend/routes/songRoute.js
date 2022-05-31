const express = require('express');
const {getSongsList, getSongById, addNewSong, getTopTenSongs} = require('../controllers/songController')

const router = express.Router();

// routes
router.route('/getAllSongs').get(getSongsList);
router.route('/getSongById/:song_id').get(getSongById);
router.route('/getTopTenSongs').get(getTopTenSongs);

router.route('/addNewSong').post(addNewSong);

// ...
module.exports = router;