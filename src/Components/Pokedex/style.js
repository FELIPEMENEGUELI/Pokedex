import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #3761a8;
`;

export const PokebolaGif = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const PokedexHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  h1 {
    color: #feca1b;
    box-shadow: 0px 20px 8px -7px rgba(0, 0, 0, 0.1);
  }
`;

export const PokedexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 15px;

  @media (min-width: 768px) {
    margin-top: 35px;
    gap: 4rem;
  }

  @media (min-width: 1024px) {
    margin-top: 25px;
    width: 80vw;
  }
`;
