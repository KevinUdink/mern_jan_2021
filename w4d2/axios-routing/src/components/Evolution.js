import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Evolution(props) {
  const { count } = props;
  const [ evolutionCount, setEvolutionCount ] = useState(0);
  const [ pokemon, setPokemon ] = useState([]);

  // const getAllPokemon = (totalCount) => {
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/evolution-chain")
      .then((response) => {
        console.log(response);
        setPokemon(response.data.results);
        setEvolutionCount(response.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ count ]);

  return (
    <div className="App">
      <h4>Total Evolutions: { evolutionCount }</h4>
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

export default Evolution;
