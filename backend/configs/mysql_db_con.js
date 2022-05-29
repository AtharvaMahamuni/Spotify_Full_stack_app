var mysql = require('mysql2');
require('dotenv').config();

const {DB_HOST, DB_USER, DB_PASS} = process.env;

var con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: 'demo'
});

//database connection
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = con;