import styled from 'styled-components';
import { Around } from '@theme-toggles/react';
import '@theme-toggles/react/css/Around.css';

export const ThemeToggleBtn = styled(Around)`
  position: absolute;
  top: 0;
  left: 0;
  color: ${props => (props.toggled ? 'black' : 'yellow')};

  svg {
    height: 32px;
    width: 32px;
  }
`;
