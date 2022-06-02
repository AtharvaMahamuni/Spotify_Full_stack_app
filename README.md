# Spotify_Full_stack_app
This is the assignment for the deltaX, for which I am building the spotify full stack application from scratch.


## Pre-requisites to open the app
- NodeJS should be installed on the system
- MySQL should be installed on the system

## Steps to run the application
The app contains 2 folder seprated for frontend and the backend. As entire communication between clients is done using the APIs.
<br />

Currently backend is running on the development server so run it using following commands.
```text=
cd backend
npm install
npm run dev
```

We need to connect the app with database. For that open the configuration and add the details.
<br />
To create the database on your local environment. Open the sql folder and login to the mysql and run the following command to run the sql scripts.

```text=
SOURCE createDb.sql
```
It will create the database as well as the dummy data for checking purpose.

<br />

Now to open the frontend file and simply use the following commands to start the frontend development server.
```text=
cd frontend
npm install
npm start
```

Now both the frontend and backend servers are running successfuly.

<br />

## The website UI looks like follows -
### Top Ten Songs
![Top Ten Songs](https://github.com/AtharvaMahamuni/Spotify_Full_stack_app/blob/main/project%20screenshots/top-ten-songs.png?raw=true)

### Top Ten Artist
![Top Ten Artists](https://github.com/AtharvaMahamuni/Spotify_Full_stack_app/blob/main/project%20screenshots/top-ten-artists.png?raw=true)

### Artists in Song
![Artists in Song](https://github.com/AtharvaMahamuni/Spotify_Full_stack_app/blob/main/project%20screenshots/song-artists.png?raw=true)

### Songs of Artist
![Songs of Artist](https://github.com/AtharvaMahamuni/Spotify_Full_stack_app/blob/main/project%20screenshots/artist-songs.png?raw=true)

### Adding new Song
![Adding new Song](https://github.com/AtharvaMahamuni/Spotify_Full_stack_app/blob/main/project%20screenshots/adding-new-song.png?raw=true)

### Adding new Artist
![Adding new Artist](https://github.com/AtharvaMahamuni/Spotify_Full_stack_app/blob/main/project%20screenshots/adding-new-artist.png?raw=true)


## API Endpoints to check the backend functionalities
To get all artists - http://localhost:4000/api/v1/getAllArtists
<br />
To get artist by id - http://localhost:4000/api/v1/getArtistById/:artist_id
<br />
To get top 10 artists - http://localhost:4000/api/v1/getTopTenArtists
<br />
To get artist by song id - http://localhost:4000/api/v1/getArtistsBySongId/:song_id
<br />
To add new artist - http://localhost:4000/api/v1/addArtist
<br />
To get all songs - http://localhost:4000/api/v1/getAllSongs
<br />
To get song by id - http://localhost:4000/api/v1/getSongById/:song_id
<br />
To get top 10 song - http://localhost:4000/api/v1/getTopTenSongs
<br />
To get song by artist id - http://localhost:4000/api/v1/getSongsByArtistId/:artist_id
<br />
To add new song - http://localhost:4000/api/v1/addNewSong
<br />
