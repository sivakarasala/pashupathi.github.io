import React from "react";
import styled from "styled-components";

const Card = ({ name, path }) => {
  return (
    <Container>
      <h1>{name}</h1>
      <p>{path}</p>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  background-color: #42275a;
  color: #ccc;
  border-radius: 5px;
  border: 3px light #d3cce3;
  box-shadow: 2px 4px 6px #d3cce3;
  padding: 1em;
  margin: 1em;
  overflow-wrap: break-word;
  transition: 500ms linear;

  h2,
  p {
    text-align: center;
    margin: auto;
  }
  :hover {
    transform: scale(1.1);
  }
`;
