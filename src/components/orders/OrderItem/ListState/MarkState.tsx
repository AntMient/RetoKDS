import React from "react";
import styled from "styled-components";
const Mark = styled.div`
  bottom: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: 2rem;
  font-weight: 800;
  padding: 0.5rem;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
`;

const MarkState = () => {
  return (
    <Mark>
      <span />
    </Mark>
  );
};

export default MarkState;
