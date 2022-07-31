import { Nav, Link, LoggedNav, NavWrap } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <NavWrap>
      {isLoggedIn ? (
        <>
          <LoggedNav>
            <Link to="/diary">{t('navigation.diary_msg')}</Link>
            <Link to="/calculator">{t('navigation.calculator_msg')}</Link>
          </LoggedNav>
        </>
      ) : (
        <>
          <Nav>
            <Link to="/signin">{t('navigation.signin_msg')}</Link>
            <Link to="/registration">{t('navigation.signup_msg')}</Link>
          </Nav>
        </>
      )}
    </NavWrap>
  );
}
