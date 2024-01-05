import styled from "styled-components";

const Container = styled.header`
  background-color: #f5f5f5;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 1rem;
  width: 16rem;
  border: 1px solid black;
  padding: 1rem;
`;

const DishContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem 0.2rem 0;
  border-bottom: 1px solid black;
`;

const DishName = styled.div`
  height: 1rem;
  width: 100%;
  margin-bottom: 0.4rem;
  background-color: ${(props) => props.theme.colors.primary};
  background-size: 200%;
  animation: skeleton-loading 1s infinite alternate;
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

const OrderItemPlaceholder = () => {
  return (
    <Container>
      <DishContainer>
        <DishName />
      </DishContainer>
      <DishContainer>
        <DishName />
      </DishContainer>
      <DishContainer>
        <DishName />
      </DishContainer>
      <DishContainer>
        <DishName />
      </DishContainer>
      <DishContainer>
        <DishName />
      </DishContainer>
      <DishContainer>
        <DishName />
      </DishContainer>
      <DishContainer>
        <DishName />
      </DishContainer>
      <DishContainer>
        <DishName />
      </DishContainer>
    </Container>
  );
};

export default OrderItemPlaceholder;