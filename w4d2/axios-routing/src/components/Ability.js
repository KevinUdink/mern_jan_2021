import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Pokemon(props) {
  const { count } = props;
  const [ abilityCount, setAbilityCount ] = useState([]);
  const [ pokemon, setPokemon ] = useState([]);

  // const getAllPokemon = (totalCount) => {
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/ability")
      .then((response) => {
        console.log(response);
        setPokemon(response.data.results);
        setAbilityCount(response.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ count ]);

  return (
    <div className="App">
      <h4>Total Abilities: { abilityCount }</h4>
      {
        pokemon.map((pokemonObj, index) => (
          <div key={index}>
            <hr />
            <p>Name: {pokemonObj.name}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Pokemon;
