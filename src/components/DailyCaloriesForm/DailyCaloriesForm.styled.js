import styled from 'styled-components';
import { Field } from 'formik';
import Select from 'react-select';
import * as palette from '../../variables/Variables';


const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  margin-left: 20px;
  margin-right: auto;
  width: 280px;

  @media screen and (min-width: 768px) {
    margin-left: 32px;
    padding-top: 100px;
    width: 545px;
    align-items: start;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 7%;
    margin-left: 16px;
  }
`;

const FormTitle = styled.h2`
  margin: 0 0 32px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: ${palette.TITLE_FONTSIZE_MOB};
  line-height: 1.44;
  color: ${props => props.theme.MAIN_COLOR};

  @media screen and (min-width: 768px) {
    font-size: ${palette.TITLE_FONTSIZE};
    line-height: 1.2;
    margin: 0 0 68px;
  }
`;

const FormWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: -32px;
    margin-left: -32px;
  }
`;

const InputWrapper = styled.div`
  height: 40px;
  :last-child {
    position: relative;
  }
  @media screen and (max-width: 767px) {
    :not(:last-child) {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 64px) / 2);
    margin-top: 32px;
    margin-left: 32px;

    :first-child {
      order: 1;
    }
    :nth-child(2) {
      order: 3;
    }
    :nth-child(3) {
      order: 5;
    }
    :nth-child(4) {
      order: 2;
    }
    :nth-child(5) {
      order: 4;
    }
    :nth-child(6) {
      order: 6;
    }
  }
`;

const Input = styled(Field)`
  padding: 0;
  width: 240px;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.LINE_COLOR};

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: ${palette.TEXT_FONTSIZE};
  font-weight: 700;
  line-height: 1.21;
  color: ${props => props.theme.MAIN_COLOR};
  background-color: rgba(117, 190, 218, 0);

  ::placeholder {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 700;
    font-size: ${palette.TEXT_FONTSIZE};
    line-height: 1.21;
    color: ${props => props.theme.SECONDARY_COLOR};
  }

  :hover,
  :focus {
    outline: none;
  }
`;

const ErrorDescr = styled.p`
  font-size: ${palette.TEXT_FONTSIZE};
  color: #ec2a2a;
  margin: 4px 0 0;
`;

const LabelRadioBoxes = styled.div`
  height: 40px;
  width: 240px;
  display: flex;
  align-items: center;
  font-family: Verdana;
  font-style: normal;
  font-weight: 700;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 1.21;
  color: ${props => props.theme.SECONDARY_COLOR};

  @media screen and (min-width: 768px) {
    border-bottom: 1px solid ${props => props.theme.LINE_COLOR};
  }
`;

const RadioFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  top: 30px;
  left: -3px;
  @media screen and (min-width: 768px) {
    top: 40px;
  }
`;

const RadioField = styled(Field)`
  appearance: none;
  display: inline-block;
  position: relative;
  top: 4px;
  color: ${props => props.theme.LINE_COLOR};
  height: 18px;
  width: 18px;
  border: 1px solid ${props => props.theme.SECONDARY_COLOR};
  border-radius: 10px;
  cursor: pointer;
  outline: none;

  &:checked::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${props => props.theme.BUTTON_COLOR};

    border-radius: 100%;
    left: 3px;
    top: 3px;
  }
`;

const LabelRadioInputs = styled.label`
  padding-left: 8px;

  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 1.21;
  color: ${props => props.theme.SECONDARY_COLOR};

  &:not(:last-of-type) {
    margin-right: 24px;
  }

  ${RadioField}:checked + & {
    color: orange;
  }
`;

const SubmitButton = styled.button`
  margin-top: 65px;
  display: block;
  padding: 0;
  width: 210px;
  height: 44px;
  font-family: Verdana;
  font-weight: 700;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: ${props => props.theme.TEXT_COLOR};
  background: ${props => props.theme.BUTTON_COLOR};
  box-shadow: 0 4px 10px rgb(252 132 45 / 50%);
  border: 2px solid ${props => props.theme.BUTTON_COLOR};
  border-radius: 30px;
  cursor: pointer;
  transition: color 250ms ease-in;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 90px;
    margin-left: auto;
  }

  :disabled {
    background: #ffa05c;
    box-shadow: none;
    pointer-events: none;
    border: none;
  }

  :hover {
    background: #ea7827;
  }
`;


const FormSelect = styled(Select)`
  font-size: ${palette.TEXT_FONTSIZE};
  font-family: 'Verdana';
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 32px;
  background: transparent;
  padding: 0 0 8px 0;
  height: 100%;
  position: relative;
  z-index: 5;
  width: 240px;

  .react-select__control {
    border: none;
    height: 40px;
    width: 240px;
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
    width: 240px;
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
    width: 240px;
    background: ${props => props.theme.SELECT_CONTAINER_COLOR};
    color: ${props => props.theme.SELECT_PLACEHOLDER_COLOR};
  }

  .react-select__menu-list{
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
`;

export {
  MainPageContainer,
  FormWrapper,
  FormTitle,
  InputWrapper,
  Input,
  ErrorDescr,
  LabelRadioBoxes,
  LabelRadioInputs,
  RadioFieldWrapper,
  RadioField,
  SubmitButton,
  FormSelect
};
