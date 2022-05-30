const Artist = require('../models/artist')

exports.getArtistsList = (req, res) => {
    Artist.getAllArtists((err, artists) => {
        if(err) 
            res.send(err);
        console.log('Artists', artists);
        res.send(artists);
    });
};