import React from 'react';
import "./Pokedex.css"
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from "../SearchBox/SearchBox"
import PokeList from '../Pokelist/PokeList';
import { PokemonSchema } from '../../Types/PokemonSchema';

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (pokemonName: string) => void;
 

}

const Pokedex = ({ 
    searchedPokemons, 
    onInputChange, 
    selectedPokemon, 
    onPokemonClick 
}: PokedexProps) => {
    return(
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox onInputChange= {onInputChange} />
                <PokeList  searchedPokemons = {searchedPokemons} 
                onPokemonClick= {onPokemonClick} 
                />
            </div>
            <div className="pokesearchresult-container">
                 <PokeSearchResult selectedPokemon = {selectedPokemon}/>
            </div>
           
        </div>
    ) 
}
export default Pokedex; 