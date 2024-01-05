import styled from "styled-components";
import { OrderItemProps } from "./OrderItem.types";
import CountdownTimer from "../Countdown/Countdown";

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

const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { order } = props;
  const { dishes, id, timestamp } = order;

  return (
    <Container>
      <DishId>Order #{id.slice(0, 10)}</DishId>
      <CountdownTimer timestamp={timestamp} />
      {dishes.map((dish, index) => (
        <DishContainer key={index}>
          <DishName>{dish.name}</DishName>
          <DishQuantity>x {dish.quantity}</DishQuantity>
        </DishContainer>
      ))}
    </Container>
  );
};

OrderItem.defaultProps = {};

export default OrderItem;