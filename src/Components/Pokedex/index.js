import { Container, PokedexGrid, PokedexHeader, PokebolaGif } from "./style.js";
import { Pagination } from "../Pagination";
import { Pokemon } from "../Pokemon";
import Pokeboll from "../../Assets/pokeballpokemon.gif";

export function Pokedex({ pokemons, loading, page, setPage, totalPages }) {
  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <Container>
      <PokedexHeader>
        <h1>Pokedex</h1>
        <PokebolaGif>
          <img src={Pokeboll} alt="Pokebola" />
        </PokebolaGif>
      </PokedexHeader>
      <>
        {loading ? (
          <div>Carregando, segura fera...</div>
        ) : (
          <PokedexGrid>
            {pokemons &&
              pokemons.map((pokemon, index) => {
                return <Pokemon key={index} pokemon={pokemon} />;
              })}
          </PokedexGrid>
        )}
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </>
    </Container>
  );
}
