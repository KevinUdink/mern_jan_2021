import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

function Contests(props) {
  const [ contestCount, setContestCount ] = useState(0);
  const [ pokemon, setPokemon ] = useState([]);

  // const getAllPokemon = (totalCount) => {
  const buttonClick = () => {
    axios.get("https://pokeapi.co/api/v2/contest-type")
      .then((response) => {
        console.log(response);
        setPokemon(response.data.results);
        setContestCount(response.data.count);

        // set state is asynchronous....so it will be the old value here!
        if(response.data.count > 4) {
          navigate("/ability");
        } else {
          navigate("/evolution");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h4>Total Contests: { contestCount }</h4>
      <button onClick={buttonClick}>click me!</button>
      {
        pokemon.map((evolutionObj, index) => (
          <div key={index}>
            <hr />
            <p>URL: {evolutionObj.url}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Contests;
