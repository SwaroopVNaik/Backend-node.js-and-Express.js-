# BackEnd Node.js and Express.js

1) What is Node.js Basics : 

- Node.js is not a Programming language.
- Node.js is not a Technology.
- Node.js is not a Framework.
- Node.js is not a Library.

- Node.js is a JavaScript Runtime Enviroment. 
(write code in JS -> send it to js wrapper -> then converting to c++ -> cause v8 enigne code is written in C++)

2) What is npm ? 

- NPM stands for Node Package Manager. It is used to install, update, and manage JavaScript packages and dependencies in a project.

3) Working with Node and npm : 

- npm init -> Created package.json -> details of the Project 

- node basic usage 

4) Protocol :

- A protocol is a set of rules and standards that define how data is transmitted and communicated between devices on a network.

4) Http and Https : 

- Http :  HTTP (HyperText Transfer Protocol) is a protocol used to transfer data between a web browser and a web server.

- Https : HTTPS (HyperText Transfer Protocol Secure) is a secure version of HTTP that encrypts data before transmission.

-------------------------------------------------------------------------------------------
# NPM Basics and Advanced Features 

1) NPM understanding : 

- NPM -> Node Package Manager (here, we can install ,update and use node related packages).
- The Files that come pre installed in Node.js core is called Module.
- The files which we install using NPM they are called Package. 

2) Installing and Uninstalling Anything Basics and Advanced : 

- To Install Anything in NPM ( npm install package-name / npm i package-name ). 
- When we install any package it becomes dependency in node-modules.

- To Uninstall Anything in npm ( npm uninstall package-name )

- To Install package of particular version ( npm install package-name@version )

3) Understanding Node Modules :

- node_modules is a folder that contains all installed packages and their dependencies required for a Node.js project.

4) Dependencies : 

- A dependency is a package/library that your project needs to work properly.

5) DevDependencies 

- These are the packages are which are only used in Development. 
- But when App is completely build and deployed then these packages are not used.

-------------------------------------------------------------------------------------------
# Introduction to Express JS 

- Express JS is a NPM Package.
- Express JS is a FrameWork. ( A framework provides a predefined structure and controls the application flow.)
- Express JS Manages Everything from receving the request and giving the Response.

-------------------------------------------------------------------------------------------
# Setting up a basic Express Application and basic Routing

- check out Express.js file 

-------------------------------------------------------------------------------------------
# MiddleWare 

- Middleware is a function in Express.js that executes between the request and response cycle. It can modify requests, perform authentication, logging, validation, or execute other tasks before passing control using next().

-------------------------------------------------------------------------------------------
# Form Handling and working with forms 

- 

-------------------------------------------------------------------------------------------
# Sessions & Cookies 

- The data saved in the frontend is called as Cookies, it is majoritly used in Authentication.

- The current process going on between frontend and server is called as Session.

- We can keep any data in the browser, Whenever we send a Request to backend the saved data in frontend will automatically go to backend.

-------------------------------------------------------------------------------------------
# Note : 

## Library => A library is a collection of reusable code that developers call whenever required.

## Framework => A framework provides a predefined structure and controls the application flow.

## nodemon => is a package used in devlopment mode to start the server so the changes made during builting backend the chnages get reflected instantly instead of stopping server and restarting it everytime to view the changes. 

- nodemon Installtion => npm i nodemon -g (-g => global installtion)
- run using nodemon => (nodemon file_name.js)