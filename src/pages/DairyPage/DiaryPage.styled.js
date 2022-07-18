import styled from 'styled-components';
import { Button } from '../../Button.styled';
import Datetime from 'react-datetime';

import 'react-datetime/css/react-datetime.css';

export const CalendarWrap = styled.div`
  display: flex;
  align-items: center;
  width: 116px;
  height: 20px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    width: 219px;
    height: 38px;
    margin-bottom: 60px;
  }
`;

export const PageWrap = styled.div`
  @media screen and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 85px);
  }
`;
export const SidebarWrap = styled.div`
  margin-top: auto;

  @media screen and (min-width: 1280px) {
    margin-top: 0;
    overflow: hidden;
  }
`;

export const Calendar = styled(Datetime)`
  .rdtPicker {
    width: 100px;
    left: -105px;
    top: 30px;
  }

  .rdtPicker td.rdtToday:before {
    border-bottom: 7px solid ${props => props.theme.BUTTON_COLOR};
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: ${props => props.theme.BUTTON_COLOR};
    text-shadow: 0 -1px 0 ${props => props.theme.BUTTON_COLOR};
  }
  @media screen and (min-width: 768px) {
    width: 219px;
  }
`;

export const CalendarTitle = styled.h1`
  font-size: 18px;
  margin-right: 21px;
  color: ${props => props.theme.MAIN_COLOR};
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const ListWrap = styled.div`
  display: flex;
  justify-items: start;
`;

export const AddBtnMobile = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px auto;
  padding: 0;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  flex-grow: 0;
  right: 0;
  left: 0;
  /* background: transparent; */
`;
