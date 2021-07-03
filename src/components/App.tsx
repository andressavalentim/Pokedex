import React from 'react'
import Pokedex from "./Pokedex/Pokedex"
import { pokemonData } from '../data/PokemonData';
import "./App.css";
import { UnpatchedPokemonSchema, PokemonSpritesSchema, PokemonSchema } from '../Types/PokemonSchema';


interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}


class App extends React.Component<any, AppState> {
    state = {
        searchField: "",
        allPokemons: [],
        searchedPokemons: [],
        selectedPokemon: undefined,

    };

    patchedPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined
            };
            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch (e) {
                console.log("exception while parsing the sprites", e);
            }
        const patchedPokemon: PokemonSchema = {
            ...pokemon,
            sprites: parsedSprites
        }
        return patchedPokemon;
    });
    return patchedPokemons;
    }
    componentDidMount() {
      const patchedPokemons: PokemonSchema[] = this.patchedPokemonData(pokemonData);
      this.setState({
          allPokemons: patchedPokemons,
          searchedPokemons: patchedPokemons
      });
    }

    handleinputChange = (inputValue: string) => {
       const { allPokemons } = this.state;
       const searchedPokemons = allPokemons.filter(
           (pokemon: PokemonSchema) => {
               return (
                   pokemon.name &&
                   pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
               );
           }
       )
       this.setState({
           searchField: inputValue,
           searchedPokemons: searchedPokemons
       })
    };

    handleClick = (pokemonName: string) => {
        const { allPokemons } = this.state;

        const selectedPokemon = allPokemons.find(
            (pokemon: PokemonSchema) => pokemon.name === pokemonName
        )

        this.setState({selectedPokemon})
    }
    render() {
        return (<div className="App">
            <h1>Pokedex</h1>
            <Pokedex 
            searchedPokemons = {this.state.searchedPokemons}
            selectedPokemon= {this.state.selectedPokemon}
            onPokemonClick = {this.handleClick}
            onInputChange = {this.handleinputChange} />
        </div>

        );
    }
}

export default App;