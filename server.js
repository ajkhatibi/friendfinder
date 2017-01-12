var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;



// Sets up the Express app to handle data parsing
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.text());
app.use(bodyparser.json({ type: "application/vnd.api+json" }));

////pages
require('./html-routes.js')(app)
require('./api-routes.js')(app)




//running server
app.listen(8080, function () {
  console.log('YODAWG')
})