import styled from "styled-components";
import { HeaderTabProps } from "./HeaderTab.types";
import { NavLink, useMatch } from "react-router-dom";

const Tab = styled.div<{ $isActive?: boolean }>`
  cursor: pointer;
  background-color: ${(props) => props.$isActive ? props.theme.colors.primary : "#f2f2f2"};
  color: ${(props) => (props.$isActive ? "white" : "black")};
  width: 50%;
  max-width: 16rem;
  text-align: center;
  padding: 0.5rem;
  user-select: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const HeaderTab: React.FC<HeaderTabProps> = (props) => {
  const { to, text } = props;
  const path = useMatch(to)?.pathname;
  const isActive = path?.includes(to);
  return (
    <>
      <Tab $isActive={isActive}>
        <NavbarLink to={to}>{text}</NavbarLink>
      </Tab>
    </>
  );
};

HeaderTab.defaultProps = {};

export default HeaderTab;