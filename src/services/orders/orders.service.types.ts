export interface Order {
  created_at: string;
  order_id: number;
  reference: string;
  isPending: boolean;
  order_dishes: OrderDish[];
}

export interface OrderDish {
    id: number;
    amount: number;
    created_at: string;
    order_id: number;
    dish: Dish;
    dish_id: number;
  }
  export interface Dish {
    dish_id: number;
    name: string;
    description: string;
    created_at: string;
  }
  export interface OrderDishPayload {
    dish_id: OrderDish["dish_id"];
    order_id: OrderDish["order_id"];
    amount: OrderDish["amount"];
  }
  
  export interface UpdateOrderPayload {
    orderId: number;
    partial: Partial<Order>;
  }