import { AxiosError, AxiosResponse } from "axios";
import axiosDefault from "../../config/axios";
import CONSTANTS from "../../config/constants";
import { mockOrders } from "./orders.service.mock";
import { Order } from "./orders.service.types";

const { SHOULD_USE_MOCK } = CONSTANTS.AXIOS;

const baseUrl = `/api/orders`;

/**
 * Fetches a list of orders
 *
 * @returns {Order[]} List of orders
 */
export const fetchOrders = async (): Promise<Order[]> => {
  try {
    if (!SHOULD_USE_MOCK) {
      const response: AxiosResponse<Order[]> = await axiosDefault.get(baseUrl, {
        params: {
          size: 1000,
        },
      });

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