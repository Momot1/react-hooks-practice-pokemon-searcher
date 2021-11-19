import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({cards, search}) {
  const pokeCards = 
    cards
    .filter(card => card.name.toLowerCase().includes(search.toLowerCase()))
    .map(card => <PokemonCard key={card.id} card={card}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {pokeCards}
    </Card.Group>
  );
}

export default PokemonCollection;
