import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import styled from "styled-components";
import HeaderTab from "../../components/header/HeaderTab/HeaderTab";

const Container = styled.div`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: -5rem;
`;

const ViewError = styled.div`
  background-image: url("src/assets/BackgroundError.svg");
  width: 100%;
  height: 15rem;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
`;

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <Container id="error-page">
      <ViewError />
      <h1>Oh no!</h1>
      <p>Lo sentimos, ha ocurrido un error inesperado.</p>

      <i>{errorMessage}</i>

      <HeaderTab to={`/orders`} text="Regresar a la página" />
    </Container>
  );
};

export default ErrorPage;
