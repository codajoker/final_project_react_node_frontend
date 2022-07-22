import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import {
  LogoLink,
  LogoImg,
  LogoText,
  LogoWrap,
  LogoTextWrap,
  LogoTextLogged,
} from './Logo.styled';

export default function Logo() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <LogoWrap>
      <LogoLink to={isLoggedIn ? '/diary' : '/'}>
        <div>
          <LogoImg />
        </div>
        <LogoTextWrap>
          {isLoggedIn ? <LogoTextLogged /> : <LogoText />}
        </LogoTextWrap>
      </LogoLink>
    </LogoWrap>
  );
}
