const Dog = require('../models/dog.model');

module.exports = {
  // key -> name of my callback function
  // value -> the anonymous function to do the work for a specific route
  helloWorld: (request, response) => {
    return response.send("Hello, world!");
  },
    
  getAllDogs: (req, res) => {
    Dog.find()
      .then((allDogs) => res.json(allDogs))
      .catch((err) => res.json(err));
  },
    
  createDog: (req, res) => {
    Dog.create(req.body)
      .then((newDog) => {
        console.log(newDog);
        res.json(newDog);
      })
      .catch((err) => res.json(err));
  },
}