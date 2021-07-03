import "./PokeList.css"
import PokeCard from '../PokeCard/PokeCard'
import { PokemonSchema } from "../../Types/PokemonSchema";


interface PokelistProps {
    searchedPokemons: PokemonSchema[];
    onPokemonClick: (pokemonName: string) => void;

}

const PokeList = ({searchedPokemons, onPokemonClick}: PokelistProps) => {
    return (
        <div className="pokelist">
          {searchedPokemons.map((pokemon) => {
                  return (
                      pokemon.name && (
                        <PokeCard
                        onPokemonClick = {onPokemonClick}
                        key= {pokemon.id}
                        name={pokemon.name}
                        spriteUrl={pokemon.sprites?.normal}
                      />
                      )
                     
                  )
              })
               }
        </div>
    );
};

export default PokeList; 