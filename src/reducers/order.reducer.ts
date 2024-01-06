import { Dish } from "../services/orders/orders.service.types";

export interface DishSelectorState {
  dish: Dish | undefined;
  amount: number;
}

interface InitialState {
  dishes: DishSelectorState[] | null;
}

const initialState: InitialState = {
  dishes: null,
};

type Action = {
  type: "SET_DISHES";
  payload: DishSelectorState[] | null;
};

export const orderReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_DISHES":
      return { ...state, dishes: action.payload };
    default:
      return state;
  }
};

export default orderReducer;