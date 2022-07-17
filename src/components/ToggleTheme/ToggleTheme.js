import React from 'react';
import { ThemeToggleBtn } from './ToggleTheme.styled';

export const ToggleTheme = ({ theme, toggleTheme }) => {
  return (
    <ThemeToggleBtn
      duration={750}
      onToggle={toggleTheme}
      toggled={theme === 'light'}
    />
  );
};
