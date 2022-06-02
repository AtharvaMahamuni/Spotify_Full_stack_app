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
    });
};

// TODO: Top 10 songs with highest avg ratings
Song.findTopTenSongs = (result) => {
    const sqlQuery = 'SELECT song.song_id, song.song_name, AVG(rating.rating) AS avg_rating FROM song \
    INNER JOIN rating ON song.song_id = rating.song_id \
    GROUP BY song.song_id \
    ORDER BY avg_rating DESC \
    LIMIT 10'
    dbCon.query(sqlQuery, (err, res) => {
        if (err) {
            console.log("Error occured while finding top 10 songs", err);
            result(null, err);
        } else {
            console.log('Listing top 10 songs successful');
            result(null, res)
        }
    });
};

// TODO: get songs by artist id
Song.fingSongsByArtistId = (song_id, result) => {
    const sqlQuery = 'SELECT song.song_name AS song_name FROM song \
    INNER JOIN artist_song ON song.song_id = artist_song.song_id \
    INNER JOIN artist ON artist_song.artist_id = artist.artist_id \
    WHERE artist.artist_id = ?';
    dbCon.query(sqlQuery, song_id, (err, res) => {
        if (err) {
            console.log('Error in finding the songs by artist id');
            res.send(null, err);
        } else {
            console.log('Success in finding songs by artist id');
            result(null, res);
        }
    })
}

module.exports = Song;