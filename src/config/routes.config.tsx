import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import KitchenPage from "../pages/KitchenPage/KitchenPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "kitchen",
        element: <KitchenPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
