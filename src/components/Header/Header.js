import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { HeaderEl, HeaderWrap, HeaderDivider } from './Header.slyled';

import { Container } from '../../Container.styled';
import { LogoTextWrap } from '../Logo/Logo.styled';
export default function Header() {
  return (
    <HeaderWrap>
      <Container>
        <HeaderEl>
          <LogoTextWrap>
            <Logo />
          </LogoTextWrap>
          <HeaderDivider />
          <Navigation />
        </HeaderEl>
      </Container>
    </HeaderWrap>
  );
}
