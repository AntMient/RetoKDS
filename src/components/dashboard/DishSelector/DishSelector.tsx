// Importa las dependencias necesarias
import React, { useState } from "react";
import styled from "styled-components";
import { DishSelectorProps } from "./DishSelector.types";
import { useFetchDishes } from "../../../services/orders/orders.service.hook";
import { useAppDispatch, useAppSelector } from "../../../config/store.config";
import { DishSelectorState } from "../../../reducers/order.reducer";

// Define el componente Selector
const SelectorContainer = styled.div`
  margin: 10px;
`;

const Placeholder = styled.option`
  color: gray;
`;

const DishSelector: React.FC<DishSelectorProps> = () => {
  const { data: dishes, isLoading } = useFetchDishes();
  const prevDishes = useAppSelector((state) => state.orderReducer.dishes);
  const dispatch = useAppDispatch();
  const [selectedDish, setSelectedDish] = useState<DishSelectorState>({
    dish: undefined,
    amount: 1,
  });

  const onChangeDish = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const findDish = dishes?.find(
      (dish) => +dish.dish_id == +event.target.value
    );

    setSelectedDish({
      ...selectedDish,
      dish: findDish,
    });
  };

  const onChangeAmount = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDish({
      ...selectedDish,
      amount: Number(event.target.value),
    });
  };

  const onPressAdd = () => {
    if (!selectedDish.dish) return;
    dispatch({
      type: "SET_DISHES",
      payload: prevDishes ? [...prevDishes, selectedDish] : [selectedDish],
    });
  };

  if (isLoading)
    return (
      <SelectorContainer>
        <select>
          <Placeholder>Loading...</Placeholder>
        </select>
      </SelectorContainer>
    );

  return (
    <SelectorContainer>
      <select onChange={onChangeDish} defaultValue={"default"}>
        <option disabled value={"default"}>
          -- select an option --
        </option>
        {dishes?.map((dish, index) => {
          const { name, dish_id } = dish;
          return (
            <option key={index} value={dish_id}>
              {name}
            </option>
          );
        })}
      </select>
      <select onChange={onChangeAmount}>
        {[1, 2, 3, 4, 5].map((amount, index) => {
          return (
            <option key={index} value={amount}>
              {amount}
            </option>
          );
        })}
      </select>
      <button onClick={onPressAdd}>Add</button>
    </SelectorContainer>
  );
};

export default DishSelector;
