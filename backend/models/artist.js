const dbCon = require('../configs/mysql_db_con')

const Artist = function (artist) {
    this.artist_id = artist.artist_id;
    this.artist_name = artist.artist_name;
    this.dob = artist.dob;
}

// TODO: Get all artists
Artist.getAllArtists = (result) => {
    dbCon.query('SELECT * FROM artist', (err, res) => {
        if(err) {
            console.log('error occured to fetch all Artists',err);
            result(null, err);
        }
        else {
            console.log('Fetch of all artists is successful');
            result(null, res);
        }
            
    });
};

// TODO: Get artist by id

Artist.getArtistById = (result) => {
    
}

module.exports = Artist