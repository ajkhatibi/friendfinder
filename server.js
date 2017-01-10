var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

// require('./html-routes.js')(app)
// require('./api-routes.js')(app)




// Sets up the Express app to handle data parsing
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.text());
app.use(bodyparser.json({ type: "application/vnd.api+json" }));

////pages
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey.html", function(req, res) {

  res.sendFile(path.join(__dirname, "survey.html"));


});


app.post('/api/friends/?', function(req, res){
	var friendsList = [{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
   ]
},

]
var friends = req.body;
friendsList.push(friends)
console.log(friendsList);










})
//running server
app.listen(3000, function () {
  console.log('YODAWG')
})