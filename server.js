//express, body-parser, path

//require node modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//sets up express app
var app = express();
var port = 3000;

//sets up bodyParer
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var friends = [
{
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

{
	"name":"Ainsley",
  "photo":"http://lorempixel.com/400/200/people/",
  "scores":[
     1,
     3,
     4,
     3,
     2,
     1,
     5,
     2,
     4,
     3
   ],
},

{
	"name":"Sabine",
  "photo":"http://lorempixel.com/400/200/people/",
  "scores":[
     3,
     3,
     3,
     3,
     3,
     3,
     2,
     1,
     3,
     2
   ],
},

{
	"name":"Lisa",
  "photo":"http://lorempixel.com/400/200/people/",
  "scores":[
     4,
     1,
     2,
     5,
     1,
     2,
     1,
     4,
     4,
     3
   ],
},

{
	"name":"Jim",
  "photo":"http://lorempixel.com/400/200/people/",
  "scores":[
     2,
     3,
     5,
     3,
     1,
     4,
     5,
     3,
     5,
     4,
     1
   ],
}


];






