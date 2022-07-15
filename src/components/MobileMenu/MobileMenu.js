import React, { useState } from 'react';
import {
  MenuWrap,
  MenuLink,
  MenuNav,
  BurgerIcon,
  BurgerButton,
} from './MobileMenu.styled';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  isMenuOpen
    ? document.body.classList.add('no-scroll')
    : document.body.classList.remove('no-scroll');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuWrap>
      <BurgerButton
        className={isMenuOpen ? 'close' : 'open'}
        onClick={() => toggleMenu()}
      >
        <BurgerIcon />
      </BurgerButton>
      <MenuNav className={isMenuOpen ? 'add-pointer' : 'remove-pointer'}>
        <MenuLink to="/diary">Щоденник</MenuLink>
        <MenuLink to="/calculator">Калькулятор</MenuLink>
      </MenuNav>
    </MenuWrap>
  );
}
