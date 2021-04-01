import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
import { Container } from 'react-bootstrap';

const PokemonLineup = ({ lineup, onRemovePokemon, onViewData }) => {
  const [pokemonLineup, setPokemonLineup] = useState(lineup);

  useEffect(() => {
    setPokemonLineup(lineup);

  }, [lineup.length])

  if (pokemonLineup.length === 0) {
    return <Container><center>No lineup yet.</center></Container>
  }

  return(
    lineup.map((pokemon, index) => {
      return <Pokemon key={index} removePokemon={() => onRemovePokemon(pokemon)} pokemon={pokemon} onViewData={onViewData} />
    })
  )

}

export default PokemonLineup