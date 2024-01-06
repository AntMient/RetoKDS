import styled from "styled-components";
import { HeaderTabProps } from "./HeaderTab.types";
import { NavLink, useMatch } from "react-router-dom";
import { FilterKitchenTabProps } from "./FilterKitchenTab.types";

const Tab = styled.div<{ $isActive?: boolean }>`
  cursor: pointer;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.primary : "#f2f2f2"};
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

const NavbarLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const FilterKitchenTab: React.FC<FilterKitchenTabProps> = (props) => {
  const { filter, text } = props;
  const path = useMatch(filter)?.pathname;
  const isActive = path?.includes(filter);
  return (
    <>
      <Tab $isActive={isActive}>
        <NavbarLink>{text}</NavbarLink>
      </Tab>
    </>
  );
};

FilterKitchenTab.defaultProps = {};

export default FilterKitchenTab;
