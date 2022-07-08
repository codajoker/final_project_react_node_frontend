import styled from 'styled-components';
import * as palette from './variables/Variables';

export const Button = styled.button`
  display: inline-block;
  background: ${props => props.primary ? palette.BUTTON_COLOR : "#fff"};
  color: ${props => props.primary ? "#fff" : palette.BUTTON_COLOR};
  box-shadow: ${props => props.primary ? "0 4px 10px rgba(252, 132, 45, .5)" : null};
  border: 2px solid #FC842D;
  font-size: 14px;
  font-weight: 700;
  padding: 13px 25px;
  border-radius: 30px;
  transition: background 200ms linear, color 200ms linear;
  cursor: pointer;

  &:hover {
    background: ${props => props.primary ? "#fff" : palette.BUTTON_COLOR};
    color: ${props => props.primary ? palette.BUTTON_COLOR : "#fff"};
  }
`;
