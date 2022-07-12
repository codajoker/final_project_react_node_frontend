import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as palette from '../../variables/Variables';

export const MenuNav = styled.nav`
  display: none;

  @media screen and (min-width: 1280px) {
    width: 268px;
    display: flex;
    height: 27px;
    flex-direction: row;
  }
`;

export const MenuLink = styled(NavLink)`
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${palette.SECONDARY_COLOR};

  &.active {
    color: ${palette.TEXT_COLOR};
  }

  @media screen and (min-width: 1280px) {
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
    &:first-child {
      margin-left: 20px;
    }
  }
`;
