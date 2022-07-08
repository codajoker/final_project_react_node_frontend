import styled from 'styled-components';
import * as palette from '../../variables/Variables';

export const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

export const HeaderWrap = styled.div`
  border-bottom: 2px solid;
  color: ${palette.LINE_COLOR};
  @media screen and (min-width: 1440px) {
    border: none;
  }
`;

export const HeaderDivider = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    height: 32px;
    border-right: 2px solid;
    border-color: ${palette.SECONDARY_COLOR};
  }
`;
