const express = require('express');
const app = express();

// Parsers
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set('view engine', 'ejs');
app.use(express.static(Path2D.join(__dirname, 'public')))

app.get("/", function(request, response){
    response.render("index")
})

app.listen(3000, function(){
    console.log("Its Running");
})555555