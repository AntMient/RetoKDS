import { AxiosError } from "axios";
import CONSTANTS from "../../config/constants";
import { mockOrders } from "./orders.service.mock";
import { Order } from "./orders.service.types";
import { supabase } from "../../config/supabaseClient";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

const { SHOULD_USE_MOCK } = CONSTANTS.AXIOS;

/**
 * Fetches a list of orders
 *
 * @returns {Order[]} List of orders
 */
export const fetchOrders = async (): Promise<Order[]> => {
  try {
    if (SHOULD_USE_MOCK) {
      console.log("enter");
      const response: PostgrestSingleResponse<Order[]> = await supabase
        .from("order")
        .select("*, order_dishes(*, dish(*))");

      if (response.error) throw new Error(response.error.message);
      console.log(response.data);
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
