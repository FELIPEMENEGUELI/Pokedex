import { Container, FavContainer, NavBarImg } from "./style";
import FavoriteContext from "../../Context";
import { Heart } from "phosphor-react";
import { useContext } from "react";

export function TopBar() {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <Container>
      <NavBarImg>
        <img alt="pokeapi-logo" src={logoImg} />
      </NavBarImg>
      <FavContainer>
        <Heart color="#E3190A" weight="fill" size={24} />
        <div>Favoritos</div>
        {favoritePokemons.length}
      </FavContainer>
    </Container>
  );
}
