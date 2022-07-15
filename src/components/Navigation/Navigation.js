import { Nav, Link, LoggedNav, NavWrap } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <NavWrap>
      {isLoggedIn ? (
        <>
          <LoggedNav>
            <Link to="/diary">Щоденник</Link>
            <Link to="/calculator">Калькулятор</Link>
          </LoggedNav>
        </>
      ) : (
        <>
          <Nav>
            <Link to="/signin">Увійти</Link>
            <Link to="/registration">Реєстрація</Link>
          </Nav>
        </>
      )}
    </NavWrap>
  );
}
