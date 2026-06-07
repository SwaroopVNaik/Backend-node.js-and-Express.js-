// How To Set a Cookies 
// To Set the cookies we use Response
// TO Read the cookies we use Request

const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();

app.use(cookieParser())

app.get("/", (Request, Response) => {

    // Setting Cookies :
    Response.cookie("name", "swaroopvnaik")
    Response.send("done");

});

app.get("/read", (Request, Response) => {

    // To view the cookies 
    console.log(Request.cookies)
    Response.send("hello");
});

app.listen(3000); 