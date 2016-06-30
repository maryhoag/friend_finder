// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));




//2 routes

//get route to /survey

app.get('/survey', function(req, res){
  res.sendfile('/survey.html/');
});

//default USE route to home.html
// Basic route that sends the user first to the AJAX Page
//change to USE and must be last!!

// app.get('/', function(req, res){
	
// 	//res.send("Welcome to the Star Wars Page!")
// 	res.sendFile(path.join(__dirname + '/home.html'));
// })


// app.use('/', function(req, res) {
// 	GET 'home.html'
// 	console.log(req.orignlUrl);
// 	console.log(req.baseUrl);
// 	console.log(req.path);
// 	next();
// });


//from stackoverflow MUST BE LAST to catch leftovers
app.use('*',function (req, res) {
        res.redirect('/home');
    });

