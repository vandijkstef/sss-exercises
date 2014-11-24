var express = require('express');
var router = express.Router();

// Sub-routes per task
var task1 = require('./task1');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'Server-side Scripting - Exercise 2'});
});

router.get('/task1', task1);

// Task 1
// Hoe is de app server opgebouwd, .listen gebruiken
// static files, het laden van een plaatje
// get -> send

// Task 2
// routes toevoegen,
// parameters (:id)
// query string (eventueel extra oprdacht)
// middleware (app.use) extra opdracht


// Task 3
// templates
// aanpassen template
// maak je eigen template
// render hello world template
// render data, json

// Task 4
// REST service
// uitleg request package
// given url, make template - display weather

// Extra opdacht op basis van query string weer ophalen

module.exports = router;