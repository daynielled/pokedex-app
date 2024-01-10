import React from "react";

const Pokecard = ({ id, name, type, base_experience }) => {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return(
            <div className="pokecard">
                <h3>{name}</h3>
                <img src={imgUrl} alt={name}/>
                <p>
                    Type: {type}
                    Base Experience: {base_experience}
                </p>
            </div>
        );
};

export default Pokecard;
