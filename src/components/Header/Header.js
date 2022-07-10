import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { HeaderEl, HeaderWrap, HeaderDivider } from './Header.slyled';
import { LogoTextWrap } from '../Logo/Logo.styled';
export default function Header() {
  return (
    <HeaderWrap>
      <HeaderEl>
        <LogoTextWrap>
          <Logo />
        </LogoTextWrap>
        <HeaderDivider />
        <Navigation />
      </HeaderEl>
    </HeaderWrap>
  );
}
