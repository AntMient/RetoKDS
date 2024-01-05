import { Order } from "../../../services/orders/orders.service.types";

// Component Props
export interface OrderItemProps {
  order: Order;
  isLoading?: boolean;
}