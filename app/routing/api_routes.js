//2 routes
var friends = require('../data/friends.js');
var path = require('path');
var body_parser = require('body-parser');

module.exports = function(app){

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.text());
	app.use(bodyParser.json({type:'application/vnd.api+json'}));

	//GET route of /api/friends to display JSON of poss friends
	app.get('/api/friends', function(req, res){

		// var chosen = req.params.friends;

		// if(chosen){
		// 	console.log(chosen);

		// 	for (var i=0; i <friends.length; i++){

		// 		if (chosen == friends[i].routeName){
		// 			res.json(friendss[i]);
		// 			return;
		// 		}
		// 	}

		// 	res.json(false);
		// }

		// else{
			res.json(friends); //KEY LINE that makes the info available to other functions
		}
	})


	//POST route to /api/friends to handle survey res and compatibility logic
	//data is an array of objects: name, photo, and scores array
	app.post('/api/friends', function(req, res) {
		
		finders.push(req.body);
		//makes available the info submited
		res.json();
	});

}
//survey answers comapred index by index

//the absolute value of each individual difference is added to totalDifference

//closest match => display via modal