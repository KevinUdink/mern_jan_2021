// special thanks to Matt for his request / suggestions in adding this
//    topic to our repo and finding that axios is great in Node AND react!
const express = require('express');
const app = express();
const axios = require('axios');


// when working with APIs, the most common requirements include:
//  1 - register to get your own personal API key (protect it and keep
//      it OUT of github by holding it in a file that is git ignored)
//  2 - adding parameters or headers to your request
//      follow the API instructions if they have specific requirements

// this example uses the icanhazdadjoke.com API
//    https://icanhazdadjoke.com/api
const options = {
  method: 'GET',
  url: 'https://icanhazdadjoke.com/',
  params: {
    // add any parameters to your request that are needed here
  },
  headers: {
    // if you need to use an API key, or change headers to your request
    //    this is a place to add it
    'Accept': 'application/json',
  }
};

app.get('/', (req, res) => {
  axios
    .request(options)
    .then((jokeResponse) => {
      console.log(jokeResponse.data);
      res.json(jokeResponse.data);
    })
    .catch((err) => console.log(err));
})

app.listen(8000, () => {
  console.log("Server is started on port 8000")
});
