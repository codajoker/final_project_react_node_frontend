import { Navigation, Logo, MobileMenu, UserInfo } from '../index';
import {
  HeaderEl,
  HeaderDivider,
  UserInfoWrap,
  HeaderWrap,
} from './Header.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <HeaderEl>
      <Logo />
      <HeaderDivider />
      <HeaderWrap>
        <UserInfoWrap>{isLoggedIn && <UserInfo />}</UserInfoWrap>
        {isLoggedIn && <MobileMenu />}
        <Navigation />
        <LanguageSwitcher/>
      </HeaderWrap>

    </HeaderEl>
  );
}
