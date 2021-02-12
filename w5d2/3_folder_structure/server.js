const express = require("express");

// start our server / create the express app object
const app = express();

// This is needed to allow for JSON post and get requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongo config
require('./config/mongoose.config');


// routes go here
// invoking the function we exported from dog.route.js
require('./routes/dog.route')(app);

// const routes = require('./routes/dog.route');
// routes(app);


// This MUST be the last line of code in the file - no routes below this line
app.listen(8000, () =>
  console.log("You have successfully connected to port 8000")
);

