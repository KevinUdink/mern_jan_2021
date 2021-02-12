const express = require('express');
const app = express();
const port = 8000;
const faker = require('faker');

// sudo npm install -g nodemon
class User {
  constructor() {
    this.name = faker.name.findName();
    this.email = faker.internet.email();
  }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/", (request, response) => {
  // const name = faker.name.findName();
  const user = new User();

  const userArray = [
    new User(),
    new User(),
    new User(),
    new User(),
  ]

  response.send(userArray);
});

app.post("/api/", (req, res) => {
  console.log(req.body);
  return res.json(req.body);
})

/////////////////////////////////////////////////////////////////////////////////////
//
//    THIS MUST BE THE LAST LINE - AFTER ALL THE ROUTES AND SETUP!!!!!!!!!!
//
/////////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => console.log("the server is running on port " + port));
