import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 10px;
  box-shadow: 0px 15px 8px -7px rgba(0,0,0,0.1);
`;

export const PaginationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #ddd;
    border-radius: 9999px;
    padding: 5px;
    color: #fff;
  }

  button:hover {
    background-color: #feca1b;
    transition: 0.8s;
    color: #3761a8;
  }
`;

export const PaginationPage = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;
