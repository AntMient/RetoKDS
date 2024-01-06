import { DishSelectorState } from "../reducers/order.reducer";
import {
  Order,
  OrderDishPayload,
} from "../services/orders/orders.service.types";

export const buildAddOrderDishesPayload = (
  tempDishes: DishSelectorState[],
  orderId: Order["order_id"]
): OrderDishPayload[] => {
  if (!tempDishes) return [];
  const payload: OrderDishPayload[] = [];

  tempDishes.forEach((dishes) => {
    const { dish } = dishes;
    if (!dish) return;

    payload.push({
      order_id: orderId,
      dish_id: dish.dish_id,
      amount: dishes.amount,
    });
  });

  return payload;
};

export const asyncDelay = (time: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};