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

function convertTsvs(req, res) {
  // create the bare db
  connection.query('CREATE TABLE images (' +
                    'd INT NOT NULL PRIMARY KEY,' +
                    'name VARCHAR(40),' +
                    'type VARCHAR(10),' +
                    'owner_id INT NOT NULL,' +
                    'date_made DATE,' +
                    'rental_price FLOAT' +
                    ');', function (error, results, fields) {
                    // error will be an Error if one occurred during the query
                    // results will contain the results of the query
                    // fields will contain information about the returned results fields (if any)
                  });

  // load the data from the tsv files into the db
  connection.query('LOAD DATA LOCAL INFILE "images.tsv" ' + 
                  'INTO TABLE images FIELDS TERMINATED BY \'\\t\' ' + 
                  'LINES TERMINATED BY \'\\n\' IGNORE 1 LINES ' + 
                  '(id, name, type, owner_id, @datevar, rental_price);',
                   function (error, results, fields) {
                    // error will be an Error if one occurred during the query
                    // results will contain the results of the query
                    // fields will contain information about the returned results fields (if any)
                  });
}

connection.end();