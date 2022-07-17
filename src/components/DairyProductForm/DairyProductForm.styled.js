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
  color: ${palette.MAIN_COLOR};
  margin-bottom: 32px;
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
    border-bottom: 1px solid ${palette.LINE_COLOR};
    border-radius: 0;
    &:hover {
      border-bottom-color: ${palette.MAIN_COLOR};
    }
    &--is-focused {
      outline: none;
      border-bottom-color: ${palette.MAIN_COLOR};
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

  .react-select__input-container {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .react-select__placeholder {
    color: ${palette.SECONDARY_COLOR};
  }
  .react-select__indicators {
    display: none;
  }
`;

export const FormInputWeight = styled.input`
  margin-bottom: 60px;
  font-size: ${palette.TEXT_FONTSIZE};
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: ${palette.MAIN_COLOR};
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid ${palette.LINE_COLOR};
  outline: none;
  transition: border-color 0.3s;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    color: ${palette.SECONDARY_COLOR};
  }
  &:focus {
    border-bottom-color: ${palette.MAIN_COLOR};
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

export const FormBtnMobile = styled(Button)`
  display: block;
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
