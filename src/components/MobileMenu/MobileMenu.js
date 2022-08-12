import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  MenuWrap,
  MenuLink,
  MenuNav,
  BurgerIcon,
  BurgerButton,
} from './MobileMenu.styled';
import { useTranslation } from 'react-i18next';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

export default function MobileMenu() {
  const isLoggedIn = useSelector(getIsLoggedIn);
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
        {isLoggedIn ? (
          <>
            <MenuLink to="/diary">{t('navigation.diary_msg')}</MenuLink>
            <MenuLink to="/calculator">
              {t('navigation.calculator_msg')}
            </MenuLink>
          </>
        ) : (
          <>
            <MenuLink to="/signin">{t('navigation.signin_msg')}</MenuLink>
            <MenuLink to="/registration">{t('navigation.signup_msg')}</MenuLink>
          </>
        )}
      </MenuNav>
    </MenuWrap>
  );
}
