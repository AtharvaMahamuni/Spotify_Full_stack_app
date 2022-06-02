-- SHOW DATABASES;

-- Use this file first to create the database and tables for the first time.

-- TODO: Create database
CREATE DATABASE spotify;
USE spotify;
SELECT DATABASE();

-- TODO: Create artist table
CREATE TABLE artist (
  artist_id INT NOT NULL AUTO_INCREMENT,
  artist_name VARCHAR(255) NOT NULL,
  dob DATE,
  PRIMARY KEY (artist_id)
);
DESC artist;

-- TODO: Create song table
CREATE TABLE song (
  song_id INT NOT NULL AUTO_INCREMENT,
  song_name VARCHAR(255) NOT NULL,
  release_date DATE,
  conver_image VARCHAR(255),
  PRIMARY KEY (song_id)
);
DESC song;


-- TODO: Create artist_song table
CREATE TABLE artist_song (
  artist_song_id INT NOT NULL AUTO_INCREMENT,
  artist_id INT NOT NULL,
  song_id INT NOT NULL,
  PRIMARY KEY (artist_song_id),
  FOREIGN KEY (artist_id) REFERENCES artist(artist_id),
  FOREIGN KEY (song_id) REFERENCES song(song_id)
);
DESC artist_song;

-- TODO: Create user table
CREATE TABLE user (
  user_id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);
DESC user;


-- TODO: Create rating table
CREATE TABLE rating (
  rating_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  song_id INT NOT NULL,
  rating  ENUM('1','2','3','4','5') NOT NULL,
  PRIMARY KEY (rating_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id),
  FOREIGN KEY (song_id) REFERENCES song(song_id)
);
DESC rating;

-- TODO: Add dummy data
SOURCE sql/dummydata.sql;