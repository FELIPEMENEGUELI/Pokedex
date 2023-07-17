import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #3761a8;
`;

export const Searchbar = styled.div`
  display: flex;
  width: 8rem;
  height: 30px;
  margin-left: 5vw;
  margin-right: 5px;

  input {
    font-size: 10px;
    width: 120px;
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    height: 35px;
    width: 16rem;

    input {
      height: 30px;
      font-size: 18px;
      width: 280px;
    }
  }
`;

export const SearchButton = styled.div`
  display: flex;
  width: 8rem;
  height: 30px;
  align-items: center;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    width: 120px;
    border: 2px solid white;
    border-radius: 5px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: #feca1b;
    color: #3761a8;
    border: 2px solid #3761a8;
    transition: 1s ease;
  }

  @media (min-width: 768px) {
    height: 35px;
    margin-left: 5px;

    button {
      height: 35px;
      font-size: 18px;
      width: 160px;
    }
  }
`;

export const PokedexHeader = styled.div`
  display: flex;

  img {
    margin-left: 16px;
    width: 20px;
    height: 20px;
  }
`;
