import React from "react";
import styled from "styled-components";

import Card from "./Card";

const CardList = ({ repos }) => {
  return (
    <Container>
      {repos === undefined
        ? ""
        : repos.map(repo => (
            <Card key={repo.id} name={repo.name} path={repo.url} />
          ))}
    </Container>
  );
};

export default CardList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(3, minmax(300px, 1fr));
  grid-gap: 10px;
`;
