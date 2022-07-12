import styled from 'styled-components';
import * as palette from '../../variables/Variables';

export const HeaderEl = styled.header`
  border-bottom: 2px solid;
  color: ${palette.LINE_COLOR};
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 16px 20px;
  position: relative;
  z-index: 1;
  @media screen and (min-width: 1280px) {
    padding: 32px 20px 16px 32px;
  }
  @media screen and (min-width: 1280px) {
    border: none;
    padding-top: 80px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    position: static;
  }
`;

export const HeaderDivider = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    height: 32px;
    border-right: 2px solid;
    border-color: ${palette.SECONDARY_COLOR};
  }
`;

export const BurgerWrap = styled.button`
  background-color: transparent;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
