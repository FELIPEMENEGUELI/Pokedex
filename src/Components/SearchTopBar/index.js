import { Container, PokedexHeader, SearchButton, Searchbar } from "./style";
import { useState } from "react";
import Pokeboll from "../../Assets/pokebola.png";

export function SearchTopBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);

    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <Container>
      <Searchbar>
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </Searchbar>
      <SearchButton>
        <button onClick={onButtonClickHandler}>
          Buscar
          <PokedexHeader>
            <img src={Pokeboll} alt="Pokebola" />
          </PokedexHeader>
        </button>
      </SearchButton>
    </Container>
  );
}
