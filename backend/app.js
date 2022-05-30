require('dotenv').config();
const con = require('./configs/mysql_db_con');
const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     res.send("This is spotify clone");
// })

// routes
const home = require('./routes/homeRoute');

// router middlewares
app.use('/api/v1', home);


module.exports = app;
