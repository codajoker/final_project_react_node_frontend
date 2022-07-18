import styled from 'styled-components';
// import * as palette from '../../variables/Variables';

export const HeaderEl = styled.header`
  border-bottom: 2px solid;
  color: ${props => props.theme.LINE_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 16px 20px;
  @media screen and (min-width: 768px) {
    padding: 20px 32px 16px 20px;
  }
  @media screen and (min-width: 1280px) {
    border: none;
    padding: 60px 16px 0px 16px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

export const HeaderDivider = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    height: 32px;
    border-right: 2px solid;
    border-color: ${props => props.theme.SECONDARY_COLOR};
  }
`;

export const UserInfoWrap = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 53px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;

export const BurgerWrap = styled.button`
  background-color: transparent;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const HeaderWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    align-items: flex-end;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
