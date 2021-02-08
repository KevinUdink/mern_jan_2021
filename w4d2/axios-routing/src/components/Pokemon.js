import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import { Link } from '@reach/router';

function Pokemon(props) {
  const { count } = props;
  const [ pokemon, setPokemon ] = useState([]);

  // const getAllPokemon = (totalCount) => {
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=" + count)
      .then((response) => {
        console.log(response);
        setPokemon(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ count ]);

  return (
    <div className="App">
      <h4>Total pokemon: { count }</h4>
      {
        pokemon.map((personObj, index) => (
          <div style={{ border: "1px solid purple" }} key={index}>
            {/* <Link to={ personObj.url }>{personObj.name}</Link> */}
            <a href={personObj.url} target="_blank" rel="noreferrer">{personObj.name}</a>


          </div>
        ))
      }
    </div>
  );
}

export default Pokemon;
