const Rating = function(rating) {
    this.rating_id = rating.rating_id;
    this.user_id = rating.user_id;
    this.song_id = rating.song_id;
    this.rating = rating.rating;
}

// TODO: Get all ratings

module.exports = Rating;