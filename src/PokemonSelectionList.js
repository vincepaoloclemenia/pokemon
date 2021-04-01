import { Button, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const PokemonSelectionList = ({ pokemon_list, onSelectLineup }) => {
  const [pokemonList, setPokemonList] = useState(pokemon_list);

  useEffect(() => {
    setPokemonList(pokemon_list);
  }, [pokemon_list.length])
  
  return(
    pokemonList.map((pokemon, index) => {
      const { name } = pokemon;
      
      return(
        <Row key={index}>
          <Col xs={12}>
            <label>{name}</label>
            <div style={{ float: 'right'} }>
              <Button onClick={() => onSelectLineup(pokemon)} variant='outline-primary'>Select</Button>
            </div>
          </Col>
        </Row>
      )
    })
  )
}

export default PokemonSelectionList;