import React from "react";
import styled from "styled-components";
import MarkState from "./MarkState";
const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const ListState = () => {
  return (
    <List>
      <MarkState />
      <MarkState />
    </List>
  );
};

export default ListState;
