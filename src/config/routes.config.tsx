import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "orders",
        element: <h3>orders</h3>,
      },
      {
        path: "kitchen",
        element: <h3>kitchen</h3>,
      },
    ],
  },
]);

export default router;