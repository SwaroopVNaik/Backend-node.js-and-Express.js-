const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { log } = require('console');

// Static => Static means content that stays the same and does not change automatically.

// ejs => Dynamic file, content can change before sending to user

//EJS => Dynamic template. Server can insert data into the page before sending it to the user.

app.set("view engine", "ejs");

// Parsers
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// Using Static files - inlucde (images, audio, video, js etc)
// We can link css to ejs pags 
// we can link Js to ejs 
// we can link images to ejs

// we can use path by importing it only ( const path = require('path'); )

app.use(express.static(path.join(__dirname, "public")));


app.get("/", function(Request, Response){
    // Reading the File Directory fs.readdir(path[,optional], callback)
    fs.readdir(`./files`, function(err, files){
        Response.render("index", {files: files});
    })
})

app.post("/create", function(Request, Response){
    // Creating a File 
    fs.writeFile(`./files/${Request.body.title.split(' ').join('')}.txt`, Request.body.details, function(err){
        if(err){
            console.log(err);
            return;
        }
        Response.redirect("/");
    });
})

app.get("/files/:filename", function(Request, Response){
    fs.readFile(`./files/${Request.params.filename}`,"utf-8",function(err, data){
        Response.render("show", {
            filename: Request.params.filename,
            filedata: data
        });
    });
});

app.get("/edit/:filename", function(Request, Response){
    Response.render('edit',{
        filename : Request.params.filename
    });

});

app.post("/edit", function(Request, Response){

    fs.rename(`./files/${Request.body.Previous}` , `./files/${Request.body.newname}`, function(err){
        Response.redirect("/")
    })
});


// Server 
app.listen(3000); 
