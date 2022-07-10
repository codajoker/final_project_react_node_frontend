import styled from 'styled-components';
import * as palette from '../../variables/Variables';
import { Button } from '../../Button.styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-family: 'GothamPro';
  font-weight: 700;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 72px;
  color: ${palette.BUTTON_COLOR};

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Input = styled.input`
  border-bottom: 1px solid #e0e0e0;
  width: 236px;
  height: 40px;
  padding-bottom: 20px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${palette.MAIN_COLOR};
  border-bottom: 1px solid ${palette.LINE_COLOR};
  transition: border-color 0.3s;

  ::placeholder {
    color: ${palette.SECONDARY_COLOR};
  }

  &:focus {
    border-bottom-color: ${palette.MAIN_COLOR};
  }

  &.active {
    color: ${palette.MAIN_COLOR};
  }

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AuthButton = styled(Button)`
  width: 182px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 32px;
    }
  }
`;
