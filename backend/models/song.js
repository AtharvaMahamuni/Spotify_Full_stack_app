const dbCon = require('../configs/mysql_db_con')

const Song = function(song) {
    this.song_id = song.song_id;
    this.song_name = song.song_name;
    this.relase_date = song.relase_date;
    this.cover_image = song.cover_image;
}

// TODO: Get all songs
Song.findAllSongs = (result) => {
    dbCon.query('SELECT * FROM song', (err, res) => {
        if (err) {
            console.log('error occured to fetch all Songs',err);
            result(null, err);
        } else {
            console.log('Fetch of all songs is successful');
            result(null, res);
        }    
    });
}; 

// TODO: Get song by id
Song.findSongById = (song_id, result) => {
    dbCon.query('Select * FROM song WHERE song_id = ?', song_id, (err, res) => {
        if (err) {
            console.log('Error occured while fetching song by id', err);
            result(null, err);
        } else {
            console.log('Fetching song with id successful');
            result(null, res);
        }
    })
}

// TODO: Add new song
Song.addSong = (songReqData, result) => {
    dbCon.query('INSERT INTO song SET ?', songReqData, (err, res) => {
        if (err) {
            console.log("Error occured while inserting new song", err);
            result(null, err);
        } else {
            console.log('New song added successfully');
            result(null, res)
        }
    })
}

module.exports = Song;