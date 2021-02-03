import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [ person, setPerson ] = useState({});
  const [ people, setPeople ] = useState([]);

  // const getPerson = () => {
  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => {
        response.json()
          .then((jsonResponse) => {
            console.log(jsonResponse);
            // document.getElementById("root").innerHTML = `<div>${jsonResponse.name}</div>`;
            setPerson(jsonResponse);
          })
          .catch((jsonError) => {
            console.log(jsonError);
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  // }
  useEffect(() => {

  }, [])

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => {
        response.json()
          .then((jsonResponse) => {
            console.log(jsonResponse);
            // document.getElementById("root").innerHTML = `<div>${jsonResponse.name}</div>`;
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
  // }

  return (
    <div className="App">
      <h2>Using APIs</h2>
      {/* <button onClick={getPerson}>Get Star Wars Character</button> */}
      <div>{ person.name }</div>
      <hr />
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

export default App;
