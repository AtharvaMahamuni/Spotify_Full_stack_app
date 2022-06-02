const express = require('express');
const {getSongsList, getSongById, addNewSong, getTopTenSongs, getSongsByArtistId} = require('../controllers/songController')
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'images/')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
})
const upload = multer({ storage: storage })

// routes
router.route('/getAllSongs').get(getSongsList);
router.route('/getSongById/:song_id').get(getSongById);
router.route('/getTopTenSongs').get(getTopTenSongs);
router.route('/getSongsByArtistId/:artist_id').get(getSongsByArtistId);

router.route('/addNewSong').post(addNewSong,  upload.single('file'));

// ...
module.exports = router;