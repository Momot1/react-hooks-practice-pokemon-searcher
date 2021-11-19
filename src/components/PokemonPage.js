import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokecards, setPokecards] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(resp => resp.json())
      .then(data => setPokecards(data))
  }, [])

  function handleSearch(search){
    setSearch(search)
  }

  function addNewPokemon(pokemon){
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokemon)
    })
      .then(resp => resp.json())
      .then(data => setPokecards([...pokecards, data]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onFormSubmit = {addNewPokemon}/>
      <br />
      <Search onSearch={handleSearch}/>
      <br />
      <PokemonCollection cards={pokecards} search={search}/>
    </Container>
  );
}

export default PokemonPage;
