import { Button, Col, Alert } from 'react-bootstrap';

const Pokemon = ({ pokemon, removePokemon, onViewData }) => {
  const { pokemon_id, name } = pokemon;
  return(
    <Col xs={4}>
      <Alert variant='dark'>
        <label>Pokemon #{pokemon_id}: {name}</label>
        <Button onClick={removePokemon} variant='danger'>Remove</Button>
        <Button onClick={() => onViewData(pokemon)} variant='warning'>Check data</Button>
      </Alert>
    </Col>
  )
}

export default Pokemon;