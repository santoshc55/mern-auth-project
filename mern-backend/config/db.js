const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "mern_auth_db",
});

db.connect((err) => {
  if (err) {
    console.log("MERN DB Error:", err);
  } else {
    console.log("MERN MySQL Connected");
  }
});

module.exports = db;