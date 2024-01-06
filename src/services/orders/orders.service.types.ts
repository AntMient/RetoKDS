export interface Order {
    created_at: string;
  order_id: number;
  reference: string;
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
    dish_id: string;
    name: string;
    description: string;
    created_at: string;
  }