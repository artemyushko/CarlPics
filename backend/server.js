import express, { json } from 'express';
import cors from 'cors';

const app = express();

// middleware for parsing JSON bodies
app.use(json());
app.use(cors());

// set up the mysql db
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

// connect to the mysql db
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

connection.end();