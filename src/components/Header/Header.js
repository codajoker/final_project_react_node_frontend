import Navigation from '../Navigation/Navigation';
import {
  HeaderEl,
  HeaderDivider,
  UserInfoWrap,
  HeaderWrap,
} from './Header.styled';
import Logo from '../Logo/Logo';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import MobileMenu from '../MobileMenu/MobileMenu';
import UserInfo from '../UserInfo/UserInfo';
import { useLocation } from 'react-router-dom';
export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  let location = useLocation();
  let currentLocation = location.pathname;
  return (
    <HeaderEl>
      <Logo />
      <HeaderDivider />
      <HeaderWrap>
        <UserInfoWrap>{isLoggedIn ? <UserInfo /> : <></>}</UserInfoWrap>
        {currentLocation === '/signin' ||
        currentLocation === '/registration' ||
        currentLocation === '/' ? (
          <></>
        ) : (
          <MobileMenu />
        )}
        <Navigation />
      </HeaderWrap>
    </HeaderEl>
  );
}
