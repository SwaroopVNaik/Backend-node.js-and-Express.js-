const http = require('http');

// To CreateServer Syntax =>
// createServer([options][,requestListener])

const server = http.createServer(function(request, response){
    response.end("Hello World")
})

server.listen(3000);