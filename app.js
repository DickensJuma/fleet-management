
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');
const cors = require("cors");

var indexRouter = require('./routes/index');


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(cors())


//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'MONGO_URI';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true  });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`app listening at http://localhost:3000`)
})

module.exports = app;
