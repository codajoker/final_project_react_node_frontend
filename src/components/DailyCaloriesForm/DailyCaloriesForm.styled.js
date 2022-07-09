import styled from 'styled-components';
import { Field } from 'formik';
import * as palette from '../../variables/Variables';

const MainPageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  @media screen and (min-width: 768px) {
    margin-left: 30px;
    padding-top: 100px;
    width: 545px;
    align-items: start;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 140px;
  }
`;

const FormTitle = styled.h2`
  margin: 0 0 32px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: ${palette.TITLE_FONTSIZE_MOB};
  line-height: 1.44;
  color: ${palette.MAIN_COLOR};

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
  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
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
  }
`;

const Input = styled(Field)`
  padding: 0;
  width: 240px;
  height: 35px;
  border: none;
  border-bottom: 1px solid ${palette.LINE_COLOR};

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: ${palette.TEXT_FONTSIZE};
  font-weight: 700;
  line-height: 1.21;
  color: ${palette.MAIN_COLOR};
  background-color: rgba(117, 190, 218, 0);

  ::placeholder {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 700;
    font-size: ${palette.TEXT_FONTSIZE};
    line-height: 1.21;
    color: ${palette.SECONDARY_COLOR};
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
  font-family: Verdana;
  font-style: normal;
  font-weight: 700;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 1.21;
  color: ${palette.SECONDARY_COLOR};
  margin-bottom: 10px;
`;
const RadioField = styled(Field)`
  appearance: none;
  display: inline-block;
  position: relative;
  top: 4px;
  color: ${palette.LINE_COLOR};
  height: 18px;
  width: 18px;
  border: 1px solid ${palette.SECONDARY_COLOR};
  border-radius: 10px;
  cursor: pointer;
  outline: none;

  &:checked::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${palette.BUTTON_COLOR};

    border-radius: 100%;
    left: 3px;
    top: 3px;
  }
`;

const LabelRadioInputs = styled.label`
  margin-left: 8px;

  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 1.21;
  color: ${palette.SECONDARY_COLOR};

  &:not(:last-of-type) {
    margin-right: 24px;
  }

  ${RadioField}:checked + & {
    color: orange;
  }
`;

const SubmitButton = styled.button`
  margin-top: 40px;
  display: block;
  padding: 0;
  width: 210px;
  height: 44px;
  font-family: Verdana;
  font-weight: 700;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: ${palette.TEXT_COLOR};
  background: ${palette.BUTTON_COLOR};
  box-shadow: 0 4px 10px rgb(252 132 45 / 50%);
  border: 2px solid ${palette.BUTTON_COLOR};
  border-radius: 30px;
  cursor: pointer;
  transition: color 250ms ease-in;
  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: auto;
  }

  :disabled {
    background: #edb084;
    pointer-events: none;
    border: none;
  }

  :hover {
    background: #ea7827;
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
  RadioField,
  SubmitButton,
};
