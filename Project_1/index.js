const express = require('express');
const app = express();
const path = require('path');

// send() will directly send the data to client.
// render() will renders a templete/view in HTML to client.

// Parsers
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Render Pages 
app.set('view engine', 'ejs');

// using this to find all the static files in the Public folder for all the Request 
// __dirname => Path of Current Directory 
// Public => the Static file folder name 
// both path are Joined using join 
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(request, response){
    response.render("index");
})

// To make the The url dynamic -> find out the route in url which can be dynamic and then just add a colon : 
// "/profile/swaroop"  =>>> "/profile/:swaroop"

app.get("/profile/:username", function(request, response){
    response.send(request.params.username);
})

app.listen(3000, function(){
    console.log("Its Running");
})