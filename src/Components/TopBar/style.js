import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 15px 8px -7px rgba(0, 0, 0, 0.1);
  background-color: #feca1b;

  @media (min-width: 768px) {
    height: 250px;
  }
`;

export const NavBarImg = styled.div`
  img {
    height: 100px;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    img {
      margin-top: 0;
      height: 220px;
      width: 300px;
      object-fit: contain;
    }
  }
`;

export const FavContainer = styled.div`
  display: flex;
  gap: 6px;
  border-radius: 5px;
  color: red;
  font-weight: bold;
  font-size: 16px;
  margin-left: 50vw;
  color: #3761a8;

  @media (min-width: 768px) {
    margin-left: 70vw;
  }
`;
