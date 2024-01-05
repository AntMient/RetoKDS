import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../config/reactQuery.config";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import router from "../config/routes.config";
import { Provider } from "react-redux";
import { store } from "../config/store.config";

const Providers: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
};

Providers.defaultProps = {};

export default Providers;