import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
  margin-bottom: 60px;
  color: ${palette.BUTTON_COLOR};
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Label = styled.label`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  border-bottom: 1px solid #e0e0e0;
  width: 280px;
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
  margin-top: 40px;

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

export const LinkButton = styled(NavLink)`
  display: inline-block;
  text-align: center;
  background: ${props => (props.primary ? palette.BUTTON_COLOR : '#fff')};
  color: ${props => (props.primary ? '#fff' : palette.BUTTON_COLOR)};
  box-shadow: ${props =>
    props.primary ? '0 4px 10px rgba(252, 132, 45, .5)' : null};
  border: 2px solid #fc842d;
  font-size: 14px;
  font-weight: 700;
  width: 182px;
  padding: 13px 25px;
  border-radius: 30px;
  transition: background 200ms linear, color 200ms linear;
  cursor: pointer;

  :hover {
    background: ${props => (props.primary ? '#fff' : palette.BUTTON_COLOR)};
    color: ${props => (props.primary ? palette.BUTTON_COLOR : '#fff')};
  }

  :disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;

export const Text = styled.span`
  color: #e10000;
  font-size: 0.77em; // ${palette.TEXT_FONTSIZE};
  margin-top: 5px;
  position: relative;
`;

export const Stub = styled.div`
  height: 20px;
  position: relative;
`;
