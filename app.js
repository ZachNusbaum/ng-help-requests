const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const helprequests = require('./controllers/help_requests');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(config.database);

app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(__dirname + '/public'));
app.use('/helprequests', helprequests);

/*app.get('/', (req, res) => {
  res.send("Invalid page");
});*/

app.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});