import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({card}) {
  let imgSource = card.sprites.front

  function changeSource(e){
    if(e.target.src === card.sprites.front){
      e.target.src = card.sprites.back
    } else{
      e.target.src = card.sprites.front
    }
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img alt={card.name} src={imgSource} onClick = {changeSource}/>
        </div>
        <div className="content">
          <div className="header">{card.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {card.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
