const express = require("express");
// we will need another library to talk with Mongo
const mongoose = require("mongoose");

// start our server / create the express app object
const app = express();

// This is needed to allow for JSON post and get requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configure DB
const dbName = "pets";

mongoose
  .connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to db: " + dbName))
  .catch((err) => console.log("Something is wrong when trying to connect with db: " + dbName));

const DogSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    isFriendly: Boolean,
  },
  {
    timestamps: true,
  }
)

const modelName = "Dog";

const Dog = mongoose.model(modelName, DogSchema);

// routes go here
app.get("/", (request, response) => {
  return response.send("Hello, world!");
});

app.get("/api/dogs", (req, res) => {
  Dog.find()
    .then((allDogs) => res.json(allDogs))
    .catch((err) => res.json(err));
});

app.post("/api/dogs", (req, res) => {
  Dog.create(req.body)
    .then((newDog) => {
      console.log(newDog);
      res.json(newDog);
    })
    .catch((err) => res.json(err));
})


// This MUST be the last line of code in the file - no routes below this line
app.listen(8000, () =>
  console.log("You have successfully connected to port 8000")
);

