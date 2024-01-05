import styled from "styled-components";
import { HeaderProps } from "./Header.types";
import HeaderTab from "../HeaderTab/HeaderTab";

const HeaderContainer = styled.header`
  background-color: white;
  padding-top: 1rem;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <HeaderTab to={`/orders`} text="Ordenes" />
      <HeaderTab to={`/kitchen`} text="Cocina" />
    </HeaderContainer>
  );
};

Header.defaultProps = {};

export default Header;