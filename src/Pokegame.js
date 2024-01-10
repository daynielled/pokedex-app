import React, {useState} from "react";
import Pokedex from "./Pokedex";

const Pokegame = ({ pokemonList }) => {
    const [shuffledPokemon, setShuffledPokemon] = useState(() => {
        // Shuffle the pokemonList to get random hands
        return pokemonList.sort(() => Math.random() - 0.5);
    });

    // Divide the shuffled list into 2 hands
    const hand1 = shuffledPokemon.slice(0,4);
    const hand2 = shuffledPokemon.slice(4,8);

    // Calculate total experience for both hands
    const totalExpHand1 = hand1.reduce((total,pokemon) => total + pokemon.base_experience, 0);
    const totalExpHand2 = hand2.reduce((total,pokemon) => total + pokemon.base_experience, 0);

    // Determine the winner
    const winnerHand = totalExpHand1 > totalExpHand2 ? hand1 : hand2;

    return (
        <div className="pokegame-container">
            <Pokedex pokemonList={hand1} totalExperience={totalExpHand1} isWinner={winnerHand === hand1} />
            <hr className="pokegame-divider" />
            <Pokedex pokemonList={hand2} totalExperience={totalExpHand2} isWinner={winnerHand === hand2} />
        </div>
    );
};

export default Pokegame;



