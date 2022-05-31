const dbCon = require('../configs/mysql_db_con');

const Artist = function (artist) {
    this.artist_id = artist.artist_id;
    this.artist_name = artist.artist_name;
    this.dob = artist.dob;
}

// TODO: Get all artists
Artist.findAllArtists = (result) => {
    dbCon.query('SELECT * FROM artist', (err, res) => {
        if (err) {
            console.log('error occured to fetch all Artists',err);
            result(null, err);
        } else {
            console.log('Fetch of all artists is successful');
            result(null, res);
        }    
    });
};

// TODO: Get artist by id
Artist.findArtistById = (artist_id, result) => {
    dbCon.query('SELECT * FROM artist WHERE artist_id = ?', artist_id, (err, res) => {
        if (err) {
            console.log('Error occured at getArtistById', err);
            result(null, err);
        } else {
            console.log('Fetching artist by id is successful');
            result(null, res)
        }
    });
};


// TODO: Add new artist
Artist.addArtist = (artistReqData, result) => {
    dbCon.query('INSERT INTO artist SET ?', artistReqData, (err, res) => {
        if (err) {
            console.log('Error while adding new artist', err);
            res.send(null, err);
        } else {
            console.log('New artist added successfully');
            result(null, res);
        }
    });
};

// TODO: Get top 10 artists by Avg rating
Artist.findTopTenArtist = (result) => {
    dbCon.query('SELECT artist.artist_name, AVG(rating.rating) AS avg_rating FROM artist \
    INNER JOIN artist_song ON artist.artist_id = artist_song.artist_id \
    INNER JOIN song ON artist_song.song_id = song.song_id \
    INNER JOIN rating ON song.song_id = rating.song_id \
    GROUP BY artist.artist_id \
    ORDER BY avg_rating DESC \
    LIMIT 10', (err, res) => {
        if (err) {
            console.log('Error to find top 10 artists', err);
            res.send(null, err);
        } else {
            console.log('Search of top 10 artists successful');
            result(null, res);
        }
    });
};

module.exports = Artist