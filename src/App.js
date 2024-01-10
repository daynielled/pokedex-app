import React from 'react';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://tse2.mm.bing.net/th?id=OIP._zmLEZ7g75-TyBjyC6REIgHaHJ&pid=Api&P=0&h=220" className="App-logo" alt="logo" />
        <div>
          <Pokegame pokemonList={[
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
          ]} />
        </div>


      </header>
    </div>
  );
}

export default App;
