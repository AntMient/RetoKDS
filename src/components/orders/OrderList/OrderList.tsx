import styled from "styled-components";
import { OrderListProps } from "./OrderList.types";
import { useFetchStores } from "../../../services/orders/orders.service.hook";
import OrderItem from "../OrderItem/OrderItem";
import { bgAnimation } from "../../../utils/animations";
import OrderListPlaceholder from "./OrderList.placeholder";

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

const OrderList: React.FC<OrderListProps> = () => {
  const { data: orders, isLoading } = useFetchStores();
  console.log("🚀 ~ orders:", orders);

  if (isLoading)
    return (
      <Container $isLoading={isLoading}>
        <BarLoader />
        <OrderListPlaceholder />
      </Container>
    );

  return (
    <Container $isLoading={isLoading}>
      {orders?.map((order, index) => (
        <OrderItem order={order} key={index} />
      ))}
      <></>
    </Container>
  );
};

OrderList.defaultProps = {};

export default OrderList;