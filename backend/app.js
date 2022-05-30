require('dotenv').config();
const con = require('./configs/mysql_db_con');
const express = require('express');
const app = express();
app.use(express.json());


// app.get('/', (req, res) => {
//     res.send("This is spotify clone");
// })

// routes
const home = require('./routes/homeRoute');
const artist = require('./routes/artistRoute');
const song = require('./routes/songRoute')

// router middlewares
app.use('/api/v1', home);
app.use('/api/v1', artist);
app.use('/api/v1', song)

module.exports = app;
