export interface Order {
    dishes: dish[];
    id: string;
    timestamp: number;
}

export interface dish {
    id: string;
    name: string;
    quantity: number;
}