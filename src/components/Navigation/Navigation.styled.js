import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as palette from '../../variables/Variables';

export const Nav = styled.nav`
  width: 193px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 1280px) {
    width: 268px;
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
  color: ${palette.SECONDARY_COLOR};
  &:hover {
    color: ${palette.MAIN_COLOR};
    transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    color: ${palette.MAIN_COLOR};
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
