// const express = require('express')
// const app = express()

// const userModel = require('./usermodel');

// // ORM -> Object Relational Mapping 
// // ODN -> Object Document Mapping
// // mongoose code is always asynchronous
// // _id : it will hv time stap when user is created and details of machine. 

// app.get('/', (Request, Response) =>{
//     Response.send("hello")
// });

// app.get('/create', async (Request, Response) =>{
//     let createdUser = await userModel.create({
//         name : "Swaroop", 
//         email : "naik@gmail.com", 
//         username: "SVN"
//     });

//     Response.send(createdUser);

// });

// app.get('/update', async (Request, Response) =>{

//     let UpdatedUser = await userModel.findOneAndUpdate
//         ({username : "SVN"}, 
//         {name : "SwaroopVNaik"}, 
//         {new : true})

//     Response.send(UpdatedUser);

// });

// app.get('/read', async (Request, Response) => {
//     // find() Reads all the user in DB
//     // to read only one usernamme find({username : "name"})
//     // find always gives are array if no user still ti give as empty arrray
//     // but findOne if no user it gives NULL 
//     let Users = await userModel.find({username : "SVN"})

//     Response.send(Users);
// })

// app.get('/delete', async (Request, Response) => {
//     let DeletedUser = await userModel.findOneAndDelete(
//         {name : "SwaroopVNaik"}
//     )

//     Response.send(DeletedUser)

// })

// app.listen(3000); 