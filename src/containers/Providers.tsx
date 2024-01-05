import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../config/reactQuery.config";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import router from "../config/routes.config";
import { Provider } from "react-redux";
import { store } from "../config/store.config";
import { ThemeProvider } from "styled-components";
import theme from "../config/theme";

const Providers: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
};

Providers.defaultProps = {};

export default Providers;