import React, {useState, useEffect} from 'react';

function People() {
  const [ people, setPeople ] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => {
        response.json()
          .then((jsonResponse) => {
            console.log(jsonResponse);
            setPeople(jsonResponse.results);
          })
          .catch((jsonError) => {
            console.log(jsonError);
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="App">
      <h2>Star Wars People</h2>
      {
        people.map((personObj, index) => (
          <div key={index}>
            <hr />
            <p>Name: {personObj.name}</p>
            <p>Homeworld: {personObj.homeworld}</p>
          </div>
        ))
      }
    </div>
  );
}

export default People;
