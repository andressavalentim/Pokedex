import React from 'react'
import { PokemonSchema } from '../../Types/PokemonSchema';
import "./PokeSearchResult.css"

interface PokeSearchResultProps {
    selectedPokemon: PokemonSchema | undefined;
}

const PokeSearchResult = ({selectedPokemon}: PokeSearchResultProps) => {
   const {name, id, height, weight, base_experience, sprites} = selectedPokemon || {};
return (
    <div className= "pokemon-result-card">
        {
        
        selectedPokemon? (
            <div>
                 <img className = "pokemon-animeted-sprite" 
                 src={sprites?.animated || sprites?.normal}  alt="pokemon"/>
                 <p>Name: {name}</p>
                 <p>Id: {id}</p>
                 <p>Height: {height}</p>
                 <p>Weight: {weight}</p>
                 <p> Base EXP: {base_experience}</p>
                
            </div>         
        ) : (
            <h2>Welcome to the Pokédex</h2>
        )}
    </div>
)
}

export default PokeSearchResult