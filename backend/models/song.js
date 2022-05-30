const Song = function(song) {
    this.song_id = song.song_id;
    this.song_name = song.song_name;
    this.relase_date = song.relase_date;
    this.cover_image = song.cover_image;
}

module.exports = Song;