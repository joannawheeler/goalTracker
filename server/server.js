var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

//make sure the end directory is the name of the db u create in mongo shell
mongoose.connect('mongodb://localhost/goalTracker');

var db = mongoose.connection;


require('./routes.js')(app, express);


app.listen(3000);
console.log('Running on port 3000');