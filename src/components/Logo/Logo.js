import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import {
  LogoLink,
  LogoImg,
  LogoText,
  LogoWrap,
  LogoTextWrap,
  LogoSpan
} from './Logo.styled';

export default function Logo() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <LogoWrap>
      <LogoLink to={isLoggedIn ? '/diary' : '/'}>
          <LogoImg />
        <LogoTextWrap>
          <LogoText>Weight </LogoText>
          <LogoSpan>Loss</LogoSpan>
        </LogoTextWrap>
      </LogoLink>
    </LogoWrap>
  );
}
