var express = require('express');
var path = require('path');
var app = express();
var router = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setup serving static assets
app.use(express.static(path.join(__dirname, 'public')));

// Setup routing
app.use(router);

// Start the server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});