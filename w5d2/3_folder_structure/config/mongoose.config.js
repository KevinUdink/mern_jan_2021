// we will need another library to talk with Mongo
const mongoose = require("mongoose");

// configure DB
const dbName = "pets";

mongoose
  .connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to db: " + dbName))
  .catch((err) => console.log("Something is wrong when trying to connect with db: " + dbName));
