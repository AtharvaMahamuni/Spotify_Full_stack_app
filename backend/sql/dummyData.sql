-- TODO: Artist dummy data
INSERT INTO artist (artist_name, dob)
VALUES ('ED Sheeran', '2000-04-05'),
    ('Shreya Ghoshal', '1987-04-29'),
    ('Arijit Singh', '1987-04-29');

-- TODO: User dummy data
INSERT INTO user (user_name, password)
VALUES ('Atharva Mahamuni', '123456'),
    ('Elon Musk', '123456'),
    ('Bill Gates', '123456');

-- TODO: Song dummy data
INSERT INTO song (song_name, release_date, conver_image)
VALUES('Tum hi ho', '2000-04-05', '../../image/default.jpg'),
    ('Love with the shape of you', '2016-04-20', '../../image/default.jpg'),
    ('Random song', '2016-04-20', '../../image/default.jpg');

-- TODO: Artist song dummy data
INSERT INTO artist_song (artist_id, song_id)
VALUES(3, 2),
    (2, 1),
    (2, 3),
    (3, 1);

-- TODO: Rating dummy data
INSERT INTO rating (user_id, song_id, rating)
VALUES(1, 1, 5),
    (2, 1, 4),
    (3, 1, 3),
    (1, 2, 4),
    (2, 2, 3),
    (3, 2, 2),
    (1, 3, 3),
    (2, 3, 2),
    (3, 3, 1);