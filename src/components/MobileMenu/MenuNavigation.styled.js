import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as palette from '../../variables/Variables';

export const CloseButton = styled.button`
  height: 24px;
  width: 24px;
  background-color: transparent;
  color: ${palette.MAIN_COLOR};
  &.active {
    color: ${palette.BUTTON_COLOR};
  }
`;

export const MenuWrap = styled.div`
  box-sizing: border-box;

  overflow: auto;
  background-color: #264061;

  padding: 60px 20px 0 20px;
`;

export const MenuNav = styled.nav`
  color: #b8b7ad;
  padding: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
`;

export const MenuItem = styled.li`
  display: inline-block;
  margin-bottom: 20px;
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
`;
