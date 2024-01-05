import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "./orders.service";

export const useFetchStores = () => {
    return useQuery({
        queryKey: ["orders"],
        queryFn: fetchOrders,
        enabled: true,
    });
};