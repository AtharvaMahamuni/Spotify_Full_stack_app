const Song = require('../models/song');

exports.getSongsList = (req, res) => {
    Song.findAllSongs((err, songs) => {
        if(err) 
            res.send(err);
        console.log('Songs in DB are : ', songs);
        res.send(songs);
    });
};

exports.getSongById = (req, res) => {
    console.log('Song id is ', req.params.song_id);
    Song.findSongById(req.params.song_id, (err, song) => {
        if(err)
            res.send(err);
        console.log('Song is : ', song);
        res.send(song);
    })
}

exports.addNewSong = (req, res) => {
    const songData = req.body;
    console.log('Song is: ', songData);
    Song.addSong(songData, (err, song) => {
        if(err)
            res.send(err);
        console.log('Song inserted: ', song);
        res.send(song);
    })
}