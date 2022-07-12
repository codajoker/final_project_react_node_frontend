import React from 'react';
import { MenuLink, MenuNav } from './MenuNavigation.styled';

export default function MenuNavigation() {
  return (
    <MenuNav>
      <MenuLink to="/diary">Щоденник</MenuLink>
      <MenuLink to="/calculator">Калькулятор</MenuLink>
    </MenuNav>
  );
}
