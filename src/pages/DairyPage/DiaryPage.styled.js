import styled from 'styled-components';
import Select from 'react-select';
import { Button } from '../../styles/Button.styled';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import * as palette from '../../variables/Variables';

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

export const MealSelect = styled(Select)`
  font-size: ${palette.TEXT_FONTSIZE};
  font-family: 'Verdana';
  font-weight: 700;
  letter-spacing: 0.04em;
  background: transparent;
  padding: 0;
  position: relative;
  z-index: 5;
  width: 100%;
  margin-left: 21px;
  text-align: center;

  .react-select__control {
    border: none;
    min-height: 22px;
    width: 105px;
    padding-bottom: 2px;
    border-bottom: 1px solid ${props => props.theme.LINE_COLOR};
    border-radius: 0;
    background: transparent;
    &:hover {
      border-bottom-color: ${props => props.theme.MAIN_COLOR};
    }
    &--is-focused {
      outline: none;
      border-bottom-color: ${props => props.theme.MAIN_COLOR};
      box-shadow: none;
    }
  }
  .react-select__value-container {
    margin: 0;
    padding: 0;
    width: 105px;
  }

  .react-select__single-value {
    color: ${props => props.theme.MAIN_COLOR};
  }
  .react-select__input-container {
    color: ${props => props.theme.MAIN_COLOR};
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .react-select__placeholder {
    color: ${props => props.theme.MAIN_COLOR};
  }
  .react-select__indicators {
    display: none;
  }
  .react-select__menu {
    width: 105px;
    background: ${props => props.theme.SELECT_CONTAINER_COLOR};
    color: ${props => props.theme.SELECT_PLACEHOLDER_COLOR};
  }

  .react-select__menu-list {
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.SIDEBAR_COLOR};
    }
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.INTAKE_DAILY_COLOR};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    .react-select__menu {
      width: 125px;
    }
    .react-select__menu {
      width: 125px;
    }
    .react-select__control {
      min-height: 35px;
      width: 125px;
    }
    .react-select__value-container {
      width: 125px;
    }
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
