import { Nav, Link } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import MenuNavigation from '../MobileMenu/MenuNavigation';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <MenuNavigation />
      ) : (
        <>
          <Nav>
            <Link to="/signin">Увійти</Link>
            <Link to="/registration">Реєстрація</Link>
          </Nav>
        </>
      )}
    </>
  );
}
