import React, { useState } from 'react';
import { MenuWrap, MenuLink, MenuNav, BurgerIcon, BurgerButton } from './MenuNavigation.styled';

export default function MenuNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  isMenuOpen ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <MenuWrap>
      <BurgerButton className={isMenuOpen ? 'close' : 'open'} onClick={() => toggleMenu()}>
        <BurgerIcon></BurgerIcon>
      </BurgerButton>
      <MenuNav>
        <MenuLink to="/diary">Щоденник</MenuLink>
        <MenuLink to="/calculator">Калькулятор</MenuLink>
      </MenuNav>
    </MenuWrap>
  );
}
