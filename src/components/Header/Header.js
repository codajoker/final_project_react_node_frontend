// import { useSelector } from 'react-redux';
// import { useState, useCallback } from 'react';
// import { HamburgerCollapse } from 'react-animated-burgers';
// import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import Navigation from '../Navigation/Navigation';
import { HeaderEl, HeaderDivider } from './Header.styled';
import Logo from '../Logo/Logo';

export default function Header() {
  // const [isActive, setIsActive] = useState(false);

  // const toggleButton = useCallback(
  //   () => setIsActive(prevState => !prevState),
  //   []
  // );
  // const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <HeaderEl>
      <Logo />
      <HeaderDivider />
      {/* <BurgerWrap>
        <HamburgerCollapse
          buttonWidth={18}
          buttonColor="transparent"
          barColor="#212121"
          {...{ isActive, toggleButton }}
        />
      </BurgerWrap> */}
      <Navigation />
    </HeaderEl>
  );
}
