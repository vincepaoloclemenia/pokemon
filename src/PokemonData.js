import { Row, Container} from 'react-bootstrap';

const PokemonData = ({ selected_pokemon }) => {
  if(!selected_pokemon) { return <p><center>No Selected Pokemon yet</center></p> }

  const { data, name} = selected_pokemon;
  return(
    <Row>
      <Container>
        <h4>{name}</h4>
        <p>{data}</p>
      </Container>
    </Row>
  )
}

export default PokemonData;
