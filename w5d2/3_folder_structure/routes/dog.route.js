const DogController = require('../controllers/dog.controller');

module.exports = (app) => {
  // ORDER matters!!
  app.get("/", DogController.helloWorld);
  app.get("/api/dogs", DogController.getAllDogs);
  app.post("/api/dogs", DogController.createDog);
  app.get("/api/dogs/random", DogController.getRandomDog);
  app.get("/api/dogs/:_id", DogController.getDog);
}
