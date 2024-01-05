export interface Order {
    dishes: dish[];
}

export interface dish {
    id: string;
    name: string;
    quantity: number;
}