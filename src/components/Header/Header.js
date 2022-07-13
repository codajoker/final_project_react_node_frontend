import Navigation from '../Navigation/Navigation';
import { HeaderEl, HeaderDivider } from './Header.styled';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <HeaderEl>
      <Logo />
      <HeaderDivider />
      <Navigation />
    </HeaderEl>
  );
}
