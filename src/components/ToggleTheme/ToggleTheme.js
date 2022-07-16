import React from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export const ToggleTheme = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? (
        <BsFillMoonStarsFill size="20px" />
      ) : (
        <BsFillSunFill size="20px" />
      )}
    </button>
  );
};