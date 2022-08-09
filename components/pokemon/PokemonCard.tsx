import { FC } from "react"
import { Card, Grid, Row, Text } from '@nextui-org/react';

import { SmallPokemon } from "../../interfaces"
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon
}
export const PokemonCard: FC<Props> = ({pokemon}) => {
  const {id, name, img} = pokemon;
  const router = useRouter();

  const onClick = ()=> {
    router.push(`/name/${ pokemon.name }`)
  }
  
  return (
    <Grid key={id} xs={ 6 } sm={ 3 } md={ 2 } xl= { 1 } >
    <Card 
      isHoverable
      isPressable
      onClick={ onClick }
    >
      <Card.Body css={{p: 1}}>
        <Card.Image
          src={img}
          width="100%"
          height={ 140 }
         />
      </Card.Body>
      <Card.Footer>
        <Row justify='space-between'>
          <Text transform='capitalize'>{ name }</Text>
          <Text>#{ id }</Text>
        </Row>
      </Card.Footer>
    </Card>
  </Grid>
  )
}