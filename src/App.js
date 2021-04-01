import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Pokedex from './Pokedex.js';
import PokemonData from './PokemonData';
import { Container, Row, Col } from 'react-bootstrap';
import PokemonLineup from './PokemonLineup';
import PokemonSelectionList from './PokemonSelectionList';

function App() {
  const [pokemonLineup, setPokemonLineup] = useState([]);
  const [pokemonList, setPokemonList] = useState(Pokedex);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function onRemovePokemon (pokemon) {
    setPokemonLineup(pokemonLineup.filter(pmon => pokemon.pokemon_id != pmon.pokemon_id ));
    setPokemonList([...pokemonList, pokemon]);
    if (pokemon.pokemon_id === selectedPokemon.pokemon_id) {
      setSelectedPokemon(null);
    }
  }

  const onAddLineup = (pokemon) => {
    if(pokemonLineup.length < 6) {
      setPokemonLineup([...pokemonLineup, pokemon]);
      setPokemonList(pokemonList.filter( mon => mon.pokemon_id != pokemon.pokemon_id ));
    } else {
      alert("You can only select 6 pokemons.");
    }
  }

  const onViewData = (pokemon) => {
    setSelectedPokemon(pokemon);
  }
  
  return (
    <Container fluid='md'>
      <Row>
        <Col xs={6}>
          <h3>Pokemon Lineup</h3>
          <Row>
            <PokemonLineup onViewData={onViewData} lineup={pokemonLineup} onRemovePokemon={onRemovePokemon}/>
          </Row>
          <h3>Pokemon Data</h3>
          <PokemonData selected_pokemon={selectedPokemon} />
        </Col>
        <Col xs={6}>
          <h3>Your list of pokemons</h3>
          <PokemonSelectionList onSelectLineup={onAddLineup} pokemon_list={pokemonList} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
