import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";

export const StyledLink = styled(Link)`
  img {
    width: 50%;
    hight: 50%;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: black;
  &.active {
    color: gold;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ItemWrapper = styled.div`
  margin: 20px;
  img {
    height: 200px;
    width: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }
`;

export const AddButtonStyled = styled(BsPlusCircle)`
  height: 2rem;
  width: 2rem;
  color: green;
  float: right;
`;
