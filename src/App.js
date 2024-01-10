import React from 'react';
import Pokedex from './Pokedex';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= "https://tse2.mm.bing.net/th?id=OIP._zmLEZ7g75-TyBjyC6REIgHaHJ&pid=Api&P=0&h=220" className="App-logo" alt="logo" />
       <div>
        <Pokedex />
       </div>

      
      </header>
    </div>
  );
}

export default App;
