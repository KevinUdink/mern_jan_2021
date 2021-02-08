import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import Header from './components/Header';
import Pokemon from './components/Pokemon';
import Ability from './components/Ability';
import Evolution from './components/Evolution';
import Contests from './components/Contests';

function App() {
  const [ pokemonCount, setPokemonCount ] = useState(0);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        // console.log(response);
        // setters are asynchronous
        setPokemonCount(response.data.count);
        // console.log(pokemonCount);
        console.log("got count: " + response.data.count);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="App container w-75">
      <Header />
      <Router>
        <Contests path="/contests" />
        <Evolution path="/evolution" />
        <Ability path="/ability" />
        <Pokemon count={ pokemonCount } path="/" />
      </Router>
    </div>
  );
}

export default App;
