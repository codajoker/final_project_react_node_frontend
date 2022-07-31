import { useState } from 'react';
import {
  MenuWrap,
  MenuLink,
  MenuNav,
  BurgerIcon,
  BurgerButton,
} from './MobileMenu.styled';
import { useTranslation } from 'react-i18next';

export default function MobileMenu() {
  const { t } = useTranslation();
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
        <MenuLink to="/diary">{t('navigation.diary_msg')}</MenuLink>
        <MenuLink to="/calculator">{t('navigation.calculator_msg')}</MenuLink>
      </MenuNav>
    </MenuWrap>
  );
}
