import styled from 'styled-components';
import { FormBtnBase } from '../../components/DairyProductForm/DairyProductForm.styled';
import * as palette from '../../variables/Variables';

export const CalendarWrap = styled.div`
  display: flex;
  align-items: center;
  width: 116px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 219px;
    height: 38px;
  }
`;

export const CalendarTitle = styled.h1`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-right: 21px;
  color: ${palette.MAIN_COLOR};
  @media screen and (min-width: 768px) {
    font-size: 34px;
    line-height: 41px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 34px;
    line-height: 41px;
  }
`;

export const ListWrap = styled.div`
  display: flex;
  justify-items: start;
  @media screen and (min-width: 768px) {
    padding: 60px 0 55px 0;
  }
`;

export const AddBtnMobile = styled(FormBtnBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding: 0;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  flex-grow: 0;
`;
