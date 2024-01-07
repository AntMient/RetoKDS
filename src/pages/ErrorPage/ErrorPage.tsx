import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import styled from "styled-components";
import HeaderTab from "../../components/header/HeaderTab/HeaderTab";
import BackgroundError from "../../assets/BackgroundError.svg";

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
      <img src={BackgroundError} alt="Your SVG" />
      <h1>Oh no!</h1>
      <p>Lo sentimos, ha ocurrido un error inesperado.</p>

      <i>{errorMessage}</i>

      <HeaderTab to={`/orders`} text="Regresar a la página" />
    </Container>
  );
};

export default ErrorPage;
