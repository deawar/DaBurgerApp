const mysql = require("mysql");
require('dotenv').config();
const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER;
var connection;
const proc = require('process');
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306, // Your port; if not 3306
        user: USER, // Your username
        password: PASSWORD, // Your password
        database: "burgers_db"
    });
}
let PID = proc.pid;
connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
