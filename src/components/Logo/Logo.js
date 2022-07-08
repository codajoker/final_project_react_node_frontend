import {
  LogoWrap,
  LogoLink,
  LogoImg,
  LogoText,
  LogoTextWrap,
} from './Logo.styled';

export default function Logo() {
  return (
    <LogoWrap>
      <LogoLink to="/diary">
        <div>
          <LogoImg />
        </div>
        <LogoTextWrap>
          <LogoText />
        </LogoTextWrap>
      </LogoLink>
    </LogoWrap>
  );
}
