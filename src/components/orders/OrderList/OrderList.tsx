import styled from "styled-components";
import { OrderListProps } from "./OrderList.types";
import { useFetchOrders } from "../../../services/orders/orders.service.hook";
import OrderItem from "../OrderItem/OrderItem";
import { bgAnimation } from "../../../utils/animations";
import OrderListPlaceholder from "./OrderList.placeholder";
import { useState } from "react";

const Container = styled.div<{ $isLoading?: boolean }>`
  background-size: 200% 200%;
  max-width: 100vw;
  max-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  margin: ${(props) =>
    props.$isLoading ? "0 0 10rem 0;" : "1.4rem 0 10rem 0"};
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 10rem;
    border: 1px solid #fff;
  }
  &::-webkit-scrollbar-track-piece:start {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track-piece:end {
    background-color: transparent;
  }
`;

const BarLoader = styled.div`
  width: 100vw;
  height: 0.4rem;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.colors.gradient};
  background-size: 200% 200%;
  animation: ${bgAnimation} 1s ease infinite;
  background-blend-mode: multiply;
`;
const ButtonFilter = styled.button<{ $isActive?: boolean }>`
  cursor: pointer;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.primary : "#f2f2f2"};
  color: ${(props) => (props.$isActive ? "white" : "black")};
  width: 50%;
  max-width: 16rem;
  text-align: center;
  padding: 0.5rem;
  user-select: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;
const ContainerFilters = styled.div`
  background-color: white;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const OrderList: React.FC<OrderListProps> = () => {
  const { data: orders, isLoading } = useFetchOrders();
  const [showCompleted, setShowCompleted] = useState(false); // New state for the filter
  if (isLoading)
    return (
      <Container $isLoading={isLoading}>
        <BarLoader />
        <OrderListPlaceholder />
      </Container>
    );
  const handleFilterClick = () => {
    setShowCompleted(!showCompleted); // Toggle the filter
  };

  return (
    <>
      <ContainerFilters>
        <ButtonFilter onClick={handleFilterClick}>
          {showCompleted ? "Mostrar todas" : "Mostrar completadas"}
        </ButtonFilter>
      </ContainerFilters>
      <Container $isLoading={isLoading}>
        {orders
          ?.filter((order) => !showCompleted || order.isPending === false) // Filter the orders
          .sort((a) => (a.isPending ? -1 : 1))
          .map((order, index) => (
            <OrderItem order={order} key={index} />
          ))}
        <></>
      </Container>
    </>
  );
};

OrderList.defaultProps = {};

export default OrderList;
