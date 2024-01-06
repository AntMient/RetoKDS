import { Outlet } from "react-router-dom";
import Header from "../components/header/Header/Header";
import useListenAuth from "../hooks/useListenerAuth";

function App() {
  useListenAuth();
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
