import { ThemeToggleBtn } from './ToggleTheme.styled';

export const ToggleTheme = ({ theme, toggleTheme, className }) => {
  return (
    <ThemeToggleBtn
      duration={750}
      onToggle={toggleTheme}
      toggled={theme === 'light'}
      className={className}
    />
  );
};
