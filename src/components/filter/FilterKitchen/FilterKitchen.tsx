import React from "react";
import styled from "styled-components";
import { FilterKitchenProps } from "./FilterKitchen.types";
import FilterKitchenTab from "../FilterKitchenTab/FilterKitchenTab";

const NavState = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
const ContainerFilters = styled.div`
  background-color: white;
  padding-top: 1rem;
  display: flex;
  justify-content: flex-start;
  gap: 0.2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

const FilterKitchen: React.FC<FilterKitchenProps> = () => {
  return (
    <>
      <ContainerFilters>
        <FilterKitchenTab filter="proceso" text="Proceso " />
        <FilterKitchenTab filter="completados" text="Completados" />
      </ContainerFilters>
    </>
  );
};

export default FilterKitchen;
