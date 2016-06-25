//2 routes

//get route to /survey

//default USE route to home.html
// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	
	//res.send("Welcome to the Star Wars Page!")
	res.sendFile(path.join(__dirname + '/home.html'));
})
