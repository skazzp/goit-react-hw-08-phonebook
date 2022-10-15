import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  width: 90px;
  height: 40px;

  &.active {
    color: white;
    background-color: #146fac;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin: 20px;
  gap: 50px;
`;

export const AuthBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
