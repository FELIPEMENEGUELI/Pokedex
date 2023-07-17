import React, { useContext, useEffect, useState } from "react";
import FavoriteContext from "../../Context";
import { Heart } from "phosphor-react";
import PokebolaAberta from "../../Assets/PokebolaAberta.png";
import {
  CardBody,
  CardInfo,
  Container,
  HeartColor,
  PokemonCard,
  PokemonImage,
  CardInfoAttack,
  CardInfoDefense,
  CardInfoHability,
  ImgPokebola,
  CorlorCard,
} from "./style.js";
import apiPokemon from "../../Api";

export function Pokemon({ pokemon }) {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart = favoritePokemons.includes(pokemon.name) ? (
    <Heart color="#E3190A" weight="fill" size={30} />
  ) : (
    <Heart color="black" weight="light" size={30} />
  );

  const getColors = async (pokemon) => {
    try {
      const pokapi = await apiPokemon.get(pokemon);
      let data = await pokapi.data;
      data = await data.species.url;
      const dataResponse = await apiPokemon.get(data);
      data = dataResponse.data;

      let color = data.color.name;
      return color;
    } catch (error) {
      console.log("Erro no getColors: ", error);
    }
  };
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const getColor = async () => {
      const color = await getColors(pokemon.name);
      setBackgroundColor(color);
    };

    getColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon.name]);

  return (
    <Container>
      <ImgPokebola>
        <div className="caixa">
          <img src={PokebolaAberta} alt="Pokebola" />
        </div>
      </ImgPokebola>
      <CorlorCard style={{ backgroundColor }} />
      <PokemonCard>
        <CardInfo>
          <span>#{pokemon.id}</span>
          <span>{pokemon.name}</span>
        </CardInfo>
        <PokemonImage>
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        </PokemonImage>

        <CardBody>
          <CardInfoHability>
            <div>
              <span className="title">Habilidades</span>
              <span>{pokemon.abilities[0].ability.name}</span>
            </div>
            <div>
              <span className="title">Type</span>
              <div className="hability">
                <span>{pokemon.types[0].type.name}</span>
                <span>
                  {pokemon.types.length > 1 ? pokemon.types[1].type.name : ""}
                </span>
              </div>
            </div>
          </CardInfoHability>

          <CardInfoAttack>
            <div>
              <span className="title">{pokemon.stats[1].stat.name}</span>
              <span>{pokemon.stats[1].base_stat}</span>
            </div>
            <div>
              <span className="title">{pokemon.stats[3].stat.name}</span>
              <span>{pokemon.stats[3].base_stat}</span>
            </div>
          </CardInfoAttack>

          <CardInfoDefense>
            <div>
              <span className="title">{pokemon.stats[2].stat.name}</span>
              <span>{pokemon.stats[2].base_stat}</span>
            </div>
            <div>
              <span className="title">{pokemon.stats[4].stat.name}</span>
              <span>{pokemon.stats[4].base_stat}</span>
            </div>
          </CardInfoDefense>
        </CardBody>

        <HeartColor>
          <button onClick={onHeartClick}>{heart}</button>
        </HeartColor>
      </PokemonCard>
    </Container>
  );
}
