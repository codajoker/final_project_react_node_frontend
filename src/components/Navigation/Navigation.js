import { Nav, Link } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <Link to="/signin">Sign in</Link>
      <Link to="/registration">Registration</Link>
    </Nav>
  );
}
