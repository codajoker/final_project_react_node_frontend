import styled from 'styled-components';
import { Around } from '@theme-toggles/react';
import '@theme-toggles/react/css/Around.css';

export const ThemeToggleBtn = styled(Around)`
  color: ${props => (props.toggled ? 'black' : 'yellow')};

  position: absolute;

  svg {
    height: 32px;
    width: 32px;
  }
`;
