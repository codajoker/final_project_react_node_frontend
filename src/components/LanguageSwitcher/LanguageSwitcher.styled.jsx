import styled from 'styled-components';

export const SelectCss = styled.select`
  margin-left: 10px;
  padding: 0;
  background: transparent;
  color: ${props => props.theme.BUTTON_COLOR};
  border: none;
  border-radius: 10px;
  outline: none;
  z-index: 10;
`;
