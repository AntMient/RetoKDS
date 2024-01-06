import { useState } from "react";
import DashboardOrder from "../../components/dashboard/DashboardOrder/DashboardOrder";
import DishSelector from "../../components/dashboard/DishSelector/DishSelector";
import { useAppDispatch, useAppSelector } from "../../config/store.config";
import {
  useAddOrderDishes,
  useCreateOrder,
} from "../../services/orders/orders.service.hook";
import { asyncDelay, buildAddOrderDishesPayload } from "../../utils/orders";

function DashboardPage() {
  const { mutateAsync: createOrder } = useCreateOrder();
  const { mutateAsync: addOrderDishes } = useAddOrderDishes();
  const dispatch = useAppDispatch();
  const [reference, setReference] = useState("");
  const [isLoading, setIsLoading] = useState({
    message: "",
    isLoading: false,
  });
  const tempDishes = useAppSelector((state) => state.orderReducer.dishes);
  const hasDishes = tempDishes && tempDishes.length > 0;

  const handleCreateOrder = async () => {
    if (!hasDishes) return;
    try {
      setIsLoading({
        message: "Creating order...",
        isLoading: true,
      });
      const order = await createOrder();
      setReference(order.reference);
      const orderDishes = buildAddOrderDishesPayload(
        tempDishes,
        order.order_id
      );
      setIsLoading({
        message: "Adding dishes to order...",
        isLoading: true,
      });
      await addOrderDishes(orderDishes);
      setIsLoading({
        message: "Order created successfully",
        isLoading: true,
      });
      await asyncDelay(2000);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading({
        message: "",
        isLoading: false,
      });
      setReference("");
      dispatch({
        type: "SET_DISHES",
        payload: undefined,
      });
    }
  };
  return (
    <>
      <h2>OrdersPage</h2>
      <DishSelector />
      <DashboardOrder reference={reference} />
      <button
        onClick={() => handleCreateOrder()}
        disabled={!hasDishes || isLoading.isLoading}
      >
        Create Order
      </button>
      {isLoading.isLoading && <p>{isLoading.message}</p>}
    </>
  );
}

export default DashboardPage;
