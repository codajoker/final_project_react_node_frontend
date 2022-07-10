import { Nav, Link } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <Link to="/signin">Увійти</Link>
      <Link to="/registration">Реєстрація</Link>
    </Nav>
  );
}
