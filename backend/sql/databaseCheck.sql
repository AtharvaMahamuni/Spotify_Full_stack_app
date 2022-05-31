-- INSERT INTO rating (user_id, song_id, rating)
--     VALUES(1, 4, 5),
--         (2, 4, 5),
--         (3, 4, 5);

-- INSERT INTO artist_song(artist_id, song_id)
-- VALUES(1, 2),
--     (1, 3),
--     (4, 3),
--     (4, 4);


-- TODO: Top 10 songs by avg rating
SELECT song.song_name, AVG(rating.rating) AS avg_rating FROM song
INNER JOIN rating ON song.song_id = rating.song_id
GROUP BY song.song_id
ORDER BY avg_rating DESC
LIMIT 10;

-- TODO: Top 10 artists by avg rating
SELECT artist.artist_name, AVG(rating.rating) AS avg_rating FROM artist
INNER JOIN artist_song ON artist.artist_id = artist_song.artist_id
INNER JOIN song ON artist_song.song_id = song.song_id
INNER JOIN rating ON song.song_id = rating.song_id
GROUP BY artist.artist_id
ORDER BY avg_rating DESC
LIMIT 10;