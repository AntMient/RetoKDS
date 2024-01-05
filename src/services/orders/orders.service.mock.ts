import { randFood, randNumber, toCollection } from "@ngneat/falso";
import { randAwsRequestId } from "@ngneat/falso";
import { Order } from "./orders.service.types";

export const mockOrders = (quantity: number): Order[] => {
    const orders: Order[] = [];

    toCollection(
        () => {
            orders.push(
                mockOrder(
                    randNumber({
                        min: 1,
                        max: 5,
                    })
                )
            );
        },
        { length: quantity }
    );

    return orders;
};

export const mockOrder = (quantity: number): Order => {
    return {
        dishes: mockDishes(quantity),
    };
};

export const mockDishes = (quantity: number): Order["dishes"] => {
    const dishes: Order["dishes"] = [];

    toCollection(
        () => {
            dishes.push({
                name: randFood(),
                quantity: randNumber({
                    min: 1,
                    max: 5,
                }),
                id: randAwsRequestId(),
            });
        },
        { length: quantity }
    );

    return dishes;
};