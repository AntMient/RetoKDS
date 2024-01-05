import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "./containers/Providers.tsx";
import "normalize.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);