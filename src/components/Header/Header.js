import { Navigation, Logo, MobileMenu, UserInfo } from '../index';
import {
  HeaderEl,
  HeaderDivider,
  UserInfoWrap,
  HeaderWrap,
  MenuNavWrap,
} from './Header.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <HeaderEl>
      <Logo />
      <HeaderDivider />
      <LanguageSwitcher />
      <HeaderWrap>
        <UserInfoWrap>{isLoggedIn && <UserInfo />}</UserInfoWrap>
        {isLoggedIn && <MobileMenu />}
        {!isLoggedIn && (
          <MenuNavWrap>
            <MobileMenu>
              <Navigation />
            </MobileMenu>
          </MenuNavWrap>
        )}
        <Navigation />
      </HeaderWrap>
    </HeaderEl>
  );
}
