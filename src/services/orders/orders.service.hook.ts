import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addOrderDishes,
  createOrder,
  fetchDishes,
  fetchOrders,
  updateOrder,
} from "./orders.service";
import {
  Order,
  OrderDishPayload,
  UpdateOrderPayload,
} from "./orders.service.types";


export const useFetchOrders = () => {
    return useQuery({
        queryKey: ["orders"],
        queryFn: fetchOrders,
        enabled: true,
    });
};

export const useFetchDishes = () => {
    return useQuery({
      queryKey: ["dishes"],
      queryFn: fetchDishes,
      enabled: true,
    });
  };
  
  export const useCreateOrder = () => {
    return useMutation<Order, Error, void>({
      mutationFn: createOrder,
    });
  };
  
  export const useAddOrderDishes = () => {
    return useMutation<void, Error, OrderDishPayload[]>({
      mutationFn: addOrderDishes,
    });
  };
  
  export const useUpdateOrder = () => {
    return useMutation<void, Error, UpdateOrderPayload>({
      mutationFn: updateOrder,
    });
  };