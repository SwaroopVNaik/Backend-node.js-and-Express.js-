const express = require('express');
const app = express();
const path = require('path')
const userModel = require('./models/user');
const user = require('./models/user');

app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (Request, Response) => {
    Response.render("index")
})

app.get('/read', async (Request, Response)=> {
    let AllUsers = await userModel.find();
    Response.render("read", {user : AllUsers})
})

app.post('/create', async (Request, Response)=> {
    let {name, email, image} = Request.body;

    let CreatedUser = await userModel.create({
        name,
        email,
        image
    });

    Response.redirect("/read");
})

app.get('/delete/:id', async (Request, Response) => {
    let AllUsers = await userModel.findOneAndDelete({_id : Request.params.id});
    Response.redirect("/read");
})

app.get('/edit/:id', async (Request, Response) => {
    let user = await userModel.findOne({_id : Request.params.id})
    Response.render("edit", {user} )
})

app.post('/update/:id', async (Request, Response) => {
    let {image, name, email} = Request.body;

    let user = await userModel.findOneAndUpdate({_id : Request.params.id}, {image, name, email}, {new : true})
    Response.redirect("/read")
})




app.listen(3000);