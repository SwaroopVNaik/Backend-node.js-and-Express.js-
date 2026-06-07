const express = require('express');
const app = express(); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get("/", (Request, Response) => {
    let token = jwt.sign({email : "Swaroop@example.com"}, "secret");
    Response.cookie("token", token)
    Response.send("done")
});

app.get('/read', (Request, Response) => {
    // Decrypting Data ! 
    let data = jwt.verify(Request.cookies.token, "secret");
    console.log(data);
})

app.listen(3000);
