import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as palette from '../../variables/Variables';
import logo from '../../images/mobile/logo.png';
import logotext from '../../images/mobile/logotext.png';

import logoDesk from '../../images/desktop/logo.png';

export const LogoWrap = styled.div``;
export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 105.3px;
  font-size: 16px;
  letter-spacing: 0.04em;
  font-weight: 100;
  margin-right: 16px;
  color: ${palette.MAIN_COLOR};
`;

export const LogoImg = styled.div`
  background-image: url(${logo});

  width: 44px;
  height: 46.6px;
  margin-right: 10.3px;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const LogoText = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    background-image: url(${logotext});
    display: block;
    width: 105.3px;
    height: 16px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${logoDesk});
    display: block;
    align-items: center;
    width: 167px;
    height: 66px;
  }
`;

export const LogoTextWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: block;
    width: 167px;
    margin-right: 20px;
    padding-bottom: 3px;
  }
`;
