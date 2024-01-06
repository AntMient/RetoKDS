import { Order } from "../../../services/orders/orders.service.types";

export interface DashboardOrderProps {
  reference?: Order["reference"];
}