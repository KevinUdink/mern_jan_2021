// This is an example of a Node ONLY web server

const http = require("http");   // get the http library to create a server
const fs = require("fs");       // file system access to read html files

// create an instance of our server
const server = http.createServer(function(request, response) {
  console.log("client requested URL: ", request.url);

  // this is how we do routing:
  if(request.url === "/") {
    fs.readFile("index.html", "utf8", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "text/html" });  // data about the response
      response.write(contents); // this is the response body
      response.end();  // we are finished with the response
    });
  }
  // if the request doesn't match the URLs above, send back a 404 message
  else {
    response.writeHead(404);
    response.end("File not found!!");  // send back the error message
  }
});

// tell the server what port we should run on
const port = 6789;
server.listen(port);

// print to the terminal window a message
console.log(`Running on localhost at port: ${port}`);
