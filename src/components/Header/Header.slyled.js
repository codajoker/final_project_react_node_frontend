import styled from 'styled-components';
import * as palette from '../../variables/Variables';

export const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  z-index: 1;
  @media screen and (min-width: 768px) {
    padding: 20px 32px 16px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

export const HeaderWrap = styled.div`
  border-bottom: 2px solid;
  color: ${palette.LINE_COLOR};
  @media screen and (min-width: 1280px) {
    border: none;
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
