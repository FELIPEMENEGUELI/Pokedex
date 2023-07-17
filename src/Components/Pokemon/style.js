import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ImgPokebola = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;

    .caixa {
      display: flex;
      width: 50px;
      height: 50px;
      position: relative;
      border-radius: 9999px;
      margin-left: -25px;
      margin-top: -45px;
    }

    .caixa::before,
    .caixa::after {
      border-radius: 9999px;
      content: "";
      position: absolute;
      width: calc(100% + 40px);
      height: calc(100% + 40px);
      background: linear-gradient(45deg, #feca1b, #ff0000, #feca1b, #ff0000);
      background-size: 300%;
      animation: AnimatedBorder 8s linear infinite;
    }

    @keyframes AnimatedBorder {
      0% {
        background-position: 0;
      }
      100% {
        background-position: 300%;
      }
    }
    .caixa::after {
      filter: blur(50px);
    }

    img {
      width: 100px;
      height: 100px;
      margin-left: -10px;
      margin-top: -10px;
      rotate: 25deg;
      position: absolute;
      z-index: 2;
    }
  }
`;
export const CorlorCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 290px;
  height: 300px;
  position: absolute;
  opacity: 0.5;

  @media (min-width: 768px) {
    width: 320px;
  }
`;

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  z-index: 1;
`;

export const PokemonImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 150px;

  img {
    margin: 10px;
    object-fit: contain;
    width: 270px;
    height: 150px;
    filter: drop-shadow(10px -5px 6px #000000);
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

export const CardInfo = styled.div`
  display: flex;
  gap: 2px;
  justify-content: flex-end;
  position: absolute;
  width: 290px;

  span {
    margin: 10px 5px 0 0;
    text-transform: capitalize;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const CardInfoHability = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  gap: 2px;

  div {
    display: flex;
    width: auto;
    flex-direction: column;
  }

  span {
    text-transform: capitalize;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 5px;
  }

  .title {
    font-weight: bold;
  }

  .hability {
    display: flex;
    flex-direction: row;
    width: 100px;
  }
`;

export const CardInfoAttack = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;

  span {
    text-transform: capitalize;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 5px;
  }

  .title {
    font-weight: bold;
  }
`;

export const CardInfoDefense = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: space-between;

  span {
    text-transform: capitalize;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 5px;
  }

  .title {
    font-weight: bold;
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-top: 10px;
    font-size: 18px;
    margin-right: 5px;
    text-transform: capitalize;
  }
`;

export const HeartColor = styled.div`
  display: flex;
  height: 40px;
  justify-content: flex-end;
  margin-right: 10px;

  button {
    font-size: 17px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: red;
  }
`;
