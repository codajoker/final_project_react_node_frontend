import React from 'react';
import { MenuWrap, MenuLink, MenuNav } from './MenuNavigation.styled';

export default function MenuNavigation() {
  return (
    <MenuWrap>
      <MenuNav>
        <MenuLink to="/diary">Щоденник</MenuLink>
        <MenuLink to="/calculator">Калькулятор</MenuLink>
      </MenuNav>
    </MenuWrap>
  );
}
