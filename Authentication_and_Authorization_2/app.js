const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt')
const userModel = require('./models/user')
const jwt = require('jsonwebtoken')

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser());

app.get("/", (Request, Response) => {
    Response.render("index")
});

app.post("/create",(Request, Response) => {
    let {username, email, password, age} = Request.body;

    // salt => Salt is a random string added to password before hashing it.
    bcrypt.genSalt(10, (error, salt) => {
        // A hash is a fixed-length encrypted-looking string created from data using a hashing algorithm.
        bcrypt.hash(password, salt, async (error, hash) => {
            let createdUser = await userModel.create({
            username, 
            email, 
            password : hash, // password encrypted
            age
        });

        let token = jwt.sign({email}, "shhhh");

        Response.cookie("token", token)
        Response.send(createdUser)
    })
})

});

app.get("/logout", function(Request, Response){
    Response.cookie("token", "");
    Response.redirect("/");
})

app.get("/login", (Request, Response) => {
    Response.render("login");
});

app.post("/login", async (Request, Response) => {
    let user = await userModel.findOne({email : Request.body.email});
    if(!user) return Response.send("Something Went Wrong");

    // Comparing Hash and User Password to check if the user is legal 
    bcrypt.compare(Request.body.password, user.password, (err, result) => {
        if(result){
            let token = jwt.sign({email : user.email}, "shhhh");
            Response.cookie("token", token)
            Response.send("Yes You can Login Now")
        }
        else {
            Respose.send("Something went Wrong")
        }
    })
});

app.listen(3000);