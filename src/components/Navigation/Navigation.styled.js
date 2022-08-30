import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as palette from '../../variables/Variables';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 1280px) {
    width: 100%;
    height: 26px;
    padding-bottom: 5px;
  }
`;

export const NavWrap = styled.div`
  display: none;
  @media screen and (min-width: 470px) {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    height: 26px;
    margin-left: -32px;
  }
`;

export const LoggedNav = styled.nav`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    align-items: center;
    max-width: 300px;
    height: 26px;
  }
`;

export const Link = styled(NavLink)`
  font-size: ${palette.TEXT_FONTSIZE};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-family: 'GothamPro';
  font-weight: 700;
  margin-right: 16px;
  color: ${props => props.theme.SECONDARY_COLOR};
  &:hover {
    color: ${props => props.theme.MAIN_COLOR};
    transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    color: ${props => props.theme.MAIN_COLOR};
  }

  &:last-child {
    margin-right: 0px;
  }

  @media screen and (min-width: 1280px) {
    border: none;
    &:first-child {
      margin-left: 20px;
    }
  }
`;
