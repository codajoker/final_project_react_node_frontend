import styled from 'styled-components';
import * as palette from '../../variables/Variables';
import { Button } from '../../Button.styled';
import AsyncSelect from 'react-select/async';

export const StyledForm = styled.form`
  display: flex;
  margin-bottom: 32px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const FormLabel = styled.label`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: auto;
    height: 37px;
  }
`;

export const FormInputProduct = styled(AsyncSelect)`
  font-size: ${palette.TEXT_FONTSIZE};
  font-family: 'Verdana';
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 32px;
  background: transparent;
  padding: 0 0 8px 0;
  height: 100%;

  @media screen and (min-width: 768px) {
    margin-right: 22px;
    margin-bottom: 0;
    width: 240px;
    margin-right: 30px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 48px;
  }

  .react-select__control {
    border: none;
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
    padding: 8px 0;

    @media screen and (min-width: 768px) {
      padding-bottom: 20px;
    }
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
    color: ${props => props.theme.SECONDARY_COLOR};
  }
  .react-select__indicators {
    display: none;
  }

  .react-select__menu {
    background: ${props => props.theme.SELECT_CONTAINER_COLOR};
    color: ${props => props.theme.SELECT_PLACEHOLDER_COLOR};
  }
`;

export const FormInputWeight = styled.input`
  margin-bottom: 60px;
  font-size: ${palette.TEXT_FONTSIZE};
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.MAIN_COLOR};
  background: transparent;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid ${props => props.theme.LINE_COLOR};
  outline: none;
  transition: border-color 0.3s;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    color: ${props => props.theme.SECONDARY_COLOR};
  }
  &:focus {
    border-bottom-color: ${props => props.theme.MAIN_COLOR};
  }
  @media screen and (min-width: 768px) {
    width: 106px;
    margin-bottom: 0;
    padding-bottom: 20px;
    text-align: end;
    margin-right: 48px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 60px;
  }
`;

export const FormBtnBase = styled.button`
  font-family: 'Verdana';
  display: inline-block;
  background: ${props =>
    props.primary ? props => props.theme.BUTTON_COLOR : 'transparent'};
  color: ${props =>
    props.primary ? '#fff' : props => props.theme.BUTTON_COLOR};
  box-shadow: ${props =>
    props.primary ? '0 4px 10px rgba(252, 132, 45, .5)' : null};
  border: 2px solid ${props => props.theme.BUTTON_COLOR};
  font-size: 14px;
  font-weight: 700;
  width: 176px;
  height: 44px;
  border-radius: 30px;
  transition: background 200ms linear, color 200ms linear;
  cursor: pointer;
  letter-spacing: 0.04em;
  margin-top: 60px;
  :hover {
    background: ${props =>
      props.primary ? 'transparent' : props => props.theme.BUTTON_COLOR};
    color: ${props =>
      props.primary ? props => props.theme.BUTTON_COLOR : '#fff'};
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
  :disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;

export const FormBtnMobile = styled(FormBtnBase)`
  display: block;
  background: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const FormBtn = styled(Button)`
  display: none;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  flex-grow: 0;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    padding: 0;
  }
`;
