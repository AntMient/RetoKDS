import React from "react";
import styled from "styled-components";
import { FilterKitchenProps } from "./FilterKitchen.types";
import FilterKitchenTab from "../FilterKitchenTab/FilterKitchenTab";

const ContainerFilters = styled.div`
  background-color: white;
  padding-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  width: 100%;
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
