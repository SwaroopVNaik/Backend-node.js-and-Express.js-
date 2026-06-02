const express = require('express')
const app = express();

// when we are using use() we are adding a middleware
// when we do app.use mandatory to have (Request, Response, next)

// When we send a plain Text to server, the Server will receive the data in blob, 
// which is not directly readable so to handle this situation we conver blob back to readable format 
// using 👇

app.use(express.json());
app.use(express.urlencoded({ extended : true }))

app.use(function(Request, Response, next){
    console.log(" Run Middleware ");
    next();
})

app.use(function(Request, Response, next){
    console.log(" Run Middleware Again ");
    next();
})

app.get("/", (Request, Response) => {
    Response.send(" Champion Mera Anuj ")
})

app.get("/profile", (Request, Response) => {
    Response.send(" Champion Uska Coach ")
})

// Error Handling 

// prints on CMD 
app.get("/about", (Request, Response, next) => {
    return next(new Error("Something went Wrong"))
})

// Print on browser
app.use((err, Request, Response, next) => {
    console.log(err.stack);
    Response.status(500).send(" Something Broke ! ")
})

app.listen(3000)
