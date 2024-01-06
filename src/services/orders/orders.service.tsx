import { AxiosError } from "axios";
import CONSTANTS from "../../config/constants";
import { mockOrders } from "./orders.service.mock";
import {
  Dish,
  Order,
  OrderDishPayload,
  UpdateOrderPayload,
} from "./orders.service.types";
import { supabase } from "../../config/supabaseClient";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

const { SHOULD_USE_MOCK } = CONSTANTS.AXIOS;

export const fetchOrders = async (): Promise<Order[]> => {
  try {
    if (SHOULD_USE_MOCK) {
      const response: PostgrestSingleResponse<Order[]> = await supabase
        .from("order")
        .select("*, order_dishes(*, dish(*))");

      if (response.error) throw new Error(response.error.message);
      return response.data;
    } else {
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockOrders(20));
        }, 1000);
      });
    }
  } catch (e) {
    const error = e as Error | AxiosError;
    throw new Error(error.message);
  }
};

export const createOrder = async (): Promise<Order> => {
  try {
    const response: PostgrestSingleResponse<Order> = await supabase
      .from("order")
      .insert({})
      .select()
      .single();

    if (response.error) throw new Error(response.error.message);

    return response.data;
  } catch (e) {
    const error = e as Error | AxiosError;
    throw new Error(error.message);
  }
};

export const addOrderDishes = async (
  payload: OrderDishPayload[]
): Promise<void> => {
  try {
    const response: PostgrestSingleResponse<unknown[]> = await supabase
      .from("order_dishes")
      .insert(payload)
      .select();

    if (response.error) throw new Error(response.error.message);
  } catch (e) {
    const error = e as Error | AxiosError;
    throw new Error(error.message);
  }
};

export const fetchDishes = async (): Promise<Dish[]> => {
  try {
    const response: PostgrestSingleResponse<Dish[]> = await supabase
      .from("dish")
      .select("*");

    if (response.error) throw new Error(response.error.message);
    return response.data;
  } catch (e) {
    const error = e as Error | AxiosError;
    throw new Error(error.message);
  }
};

export const updateOrder = async (
  config: UpdateOrderPayload
): Promise<void> => {
  const { orderId, partial } = config;
  try {
    const response: PostgrestSingleResponse<unknown> = await supabase
      .from("order")
      .update(partial)
      .eq("order_id", orderId)
      .select();

    if (response.error) throw new Error(response.error.message);
  } catch (e) {
    const error = e as Error | AxiosError;
    throw new Error(error.message);
  }
};
