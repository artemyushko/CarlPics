import express, { json } from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();

// middleware for parsing JSON bodies
app.use(json());
app.use(cors());

// set up the mysql db
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

// connect to the mysql db
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

function convertTsvs(req, res) {
  connection.query('SET GLOBAL local_infile = 1;', function (error, results, fields) {})
  connection.query('CREATE TABLE images (' +
                    'id INT NOT NULL PRIMARY KEY,' +
                    'title VARCHAR(100),' +
                    'dates VARCHAR(20),' +
                    'people_depicted VARCHAR(500)' +
                    ');', function (error, results, fields) {
                    // error will be an Error if one occurred during the query
                    // results will contain the results of the query
                    // fields will contain information about the returned results fields (if any)
                  });

  // load the data from the tsv files into the db
  connection.query('LOAD DATA LOCAL INFILE "images.tsv" ' + 
                  'INTO TABLE images FIELDS TERMINATED BY \'\t\' ' + 
                  'LINES TERMINATED BY \'\n\' IGNORE 1 LINES ' + 
                  '(id, title, dates, people_depicted);',
                   function (error, results, fields) {
                    console.log("error", error);
                    // error will be an Error if one occurred during the query
                    // results will contain the results of the query
                    // fields will contain information about the returned results fields (if any)
                  });
}
convertTsvs(null, null);
connection.end();