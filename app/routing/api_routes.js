//2 routes

//GET route of /api/friends to display JSON of poss friends
app.get('/api/:friends?', function(req, res){

	var chosen = req.params.friends;

	if(chosen){
		console.log(chosen);

		for (var i=0; i <friends.length; i++){

			if (chosen == friends[i].routeName){
				res.json(friendss[i]);
				return;
			}
		}

		res.json(false);
	}

	else{
		res.json(friends);
	}
})


//POST route to /api/friends to handle survey res and compatibility logic
//data is an array of objects: name, photo, and scores array

//survey answers comapred index by index

//the absolute value of each individual difference is added to totalDifference

//closest match => display via modal