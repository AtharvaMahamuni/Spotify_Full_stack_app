const Artist = require('../models/artist');

exports.getArtistsList = (req, res) => {
    Artist.findAllArtists((err, artists) => {
        if(err) 
            res.send(err);
        console.log('Artists are : ', artists);
        res.send(artists);
    });
};

exports.getArtistWithId = (req, res) => {
    console.log('artist id', req.params.artist_id);
    Artist.findArtistById(req.params.artist_id,(err, artist) => {
        if(err)
            res.send(err);
        console.log('Artist is : ', artist);
        res.send(artist);
    });
};

exports.addNewArtist = (req, res) => {
    const artistData = req.body;
    console.log('request body is', artistData);
    Artist.addArtist(artistData, (err, artist) => {
        if (err)
            res.send(err)
        console.log('Artist added : ', artist);
        res.send(artist);
    })
}