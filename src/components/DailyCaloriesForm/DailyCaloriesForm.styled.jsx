import styled from 'styled-components';
import { Field } from 'formik';
import * as palette from '../../variables/Variables';

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  @media screen and (min-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
    width: 570px;
    align-items: start;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: start;
  }
`;

const FormTitle = styled.h2`
  font-family: 'Verdana';
  font-weight: 700;
  font-size: ${palette.TITLE_FONTSIZE_MOB};
  line-height: 1.44;
  color: ${palette.MAIN_COLOR};

  @media screen and (min-width: 768px) {
    font-size: ${palette.TITLE_FONTSIZE};
    line-height: 1.2;
  }
`;

const InputWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
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
  display: block;
  margin: 40px auto 0;
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
