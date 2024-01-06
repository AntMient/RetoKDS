import styled from "styled-components";
import { OrderItemProps } from "./OrderItem.types";
import {
  useFetchOrders,
  useUpdateOrder,
} from "../../../services/orders/orders.service.hook";
import { UpdateOrderPayload } from "../../../services/orders/orders.service.types";
import ItemCuts from "../../ItemCuts/ItemCuts";
import { FaCheck } from "react-icons/fa";

const Container = styled.header`
  position: relative;
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
  padding-bottom: 3rem;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.4);
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

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  height: 40px;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 5px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #11519b;
    color: white;
  }
`;

const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { order } = props;
  const { reference, order_dishes, isPending } = order;
  const { mutateAsync: updateOrder } = useUpdateOrder();
  const { refetch } = useFetchOrders();

  const updateOrderStatus = async () => {
    const payload: UpdateOrderPayload = {
      orderId: order.order_id,
      partial: { isPending: false },
    };
    await updateOrder(payload);
    await refetch();
  };

  return (
    <Container>
      {isPending ? (
        <>
          <DishId>Preparing...</DishId>
          <Button onClick={updateOrderStatus}>complete</Button>
        </>
      ) : (
        <TopContainer>
          <DishId>Ready!</DishId>
          <FaCheck />
        </TopContainer>
      )}
      <DishId>Order #{reference.slice(0, 10)}</DishId>

      {order_dishes.map((dishes, index) => {
        const { dish } = dishes;
        return (
          <DishContainer key={index}>
            <DishName>{dish.name}</DishName>
            <DishQuantity>x {dishes.amount}</DishQuantity>
          </DishContainer>
        );
      })}
      <ItemCuts />
    </Container>
  );
};

OrderItem.defaultProps = {};

export default OrderItem;
