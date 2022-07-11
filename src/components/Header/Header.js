import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { HeaderEl, HeaderWrap, HeaderDivider } from './Header.slyled';
import { LogoTextWrap } from '../Logo/Logo.styled';
// import MobileMenu from '../MobileMenu/MobileMenu';
export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <HeaderWrap>
      <HeaderEl>
        <LogoTextWrap>
          <Logo />
        </LogoTextWrap>
        <HeaderDivider />

        {isLoggedIn ? <button>Меню</button> : <Navigation />}
      </HeaderEl>
    </HeaderWrap>
  );
}
