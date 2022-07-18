import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background: ${props =>
    props.primary ? props.theme.BUTTON_COLOR : 'transparent'};
  color: ${props => (props.primary ? '#fff' : props.theme.BUTTON_COLOR)};
  box-shadow: ${props =>
    props.primary ? '0 4px 10px rgba(252, 132, 45, .5)' : null};
  border: 2px solid #fc842d;
  font-size: 14px;
  font-weight: 700;
  padding: 13px 25px;
  border-radius: 30px;
  transition: background 200ms linear, color 200ms linear;
  cursor: pointer;
  letter-spacing: 0.04em;

  :hover {
    background: ${props =>
      props.primary ? 'transparent' : props.theme.BUTTON_COLOR};
    color: ${props => (props.primary ? props.theme.BUTTON_COLOR : '#fff')};
  }

  :disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;
