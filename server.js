//express, body-parser, path
// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var friends = require('./app.data.friends.js');
var new_friend = {};

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.listen(PORT, function() {
	console.log('server listening on %d', PORT);
});





// app.get('/survey', function(request, response) {

// })



 //app.use(express.static('public'));

 var friend_modal = 
  '<!-- Modal Structure -->'
  '<div id="modal1" class="modal">' +
    '<div class="modal-content">' +
      '<h4>Friend</h4>' +
      '<p>' + new_friend + '</p>' +
    '</div><div class="modal-footer">' +
      '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>' +
    '</div></div>'



 // app.use(function(req, res) {
 //       res.sendFile(path.join(__dirname, "..", "public", "home.html"));
 //   }); // end of home.html route


 