import styled from "styled-components";
import { HeaderProps } from "./Header.types";
import HeaderTab from "../HeaderTab/HeaderTab";
import { useAppSelector } from "../../../config/store.config";
import { useSignOut } from "../../../services/auth/auth.service.hook";

const HeaderContainer = styled.header`
  background-color: white;
  padding-top: 1rem;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

const Header: React.FC<HeaderProps> = () => {
  const { mutateAsync: signOut } = useSignOut();

  const session = useAppSelector((state) => state.authReducer.session);

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <HeaderContainer>
      {session ? (
        <>
          <HeaderTab to={`/dashboard`} text="Dashboard" />
          <HeaderTab to={`/orders`} text="Ordenes" />
          <button onClick={() => handleSignOut()}>Cerrar Sesión</button>
        </>
      ) : (
        <></>
      )}
    </HeaderContainer>
  );
};

Header.defaultProps = {};

export default Header;
