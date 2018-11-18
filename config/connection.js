const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect(function(err) {
    console.log(`Connected to Database!`);
});

module.exports = connection;