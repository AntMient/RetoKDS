import React from "react";
import { DashboardOrderProps } from "./DashboardOrder.types";
import { useAppSelector } from "../../../config/store.config";
import styled from "styled-components";

const Container = styled.header`
  background-color: #f5f5f5;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 1rem;
  width: 16rem;
  border: 1px solid black;
  padding: 1rem;
`;

const DishContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem 0.2rem 0;
  border-bottom: 1px solid black;
`;

const DishId = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;

const DishName = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;

const DishQuantity = styled.h4`
  font-size: 1rem;
  font-weight: 800;
`;

const DashboardOrder: React.FC<DashboardOrderProps> = (props) => {
  const { reference } = props;
  const dishes = useAppSelector((state) => state.orderReducer.dishes);
  const referenceText = reference ? reference.slice(0, 10) : "N/A";
  return (
    <Container>
      <DishId>Order # {referenceText}</DishId>
      {dishes?.map((dishWithAmount, index) => {
        const { amount, dish } = dishWithAmount;
        return (
          <DishContainer key={index}>
            <DishName>{dish?.name}</DishName>
            <DishQuantity>x {amount}</DishQuantity>
          </DishContainer>
        );
      })}
    </Container>
  );
};

export default DashboardOrder;
