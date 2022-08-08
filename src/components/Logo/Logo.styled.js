import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from "../../images/mobile/weight-loss-logo.png"
import * as palette from '../../variables/Variables';
import logoTab from "../../images/tablet/weight-loss-logo.png"

export const LogoWrap = styled.div`
 @media screen and (min-width: 768px) {
    width: 190px;
    position: relative;
    margin-right: 20px;
  }

`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const LogoImg = styled.div`
  background-image: url(${logo}) ;
  background-repeat: no-repeat;
  background-size: contain;
  width: 60px;
  height: 46.6px;
  margin-right: 10.3px;
  @media screen and (min-width: 768px) {
  background-image: url(${logoTab}) ;
  }
  @media screen and (min-width: 1280px) {
  background-image: url(${logo}) ;
  width: 80px;
  height: 50px;
  }
`;

export const LogoTextWrap = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  position: absolute;
  top: 25px;
  left: 47px;
  align-items: center;
  font-size: ${palette.TEXT_FONTSIZE};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-family: 'GothamPro';
  font-weight: 700;
  height: 16px;
  }
  @media screen and (min-width: 768px) {
  top: 16px;
  }
  @media screen and (min-width: 1280px) {
  top: 29px;
  left: 60px;
  }
`;

export const LogoText = styled.p`
  color: #68B147;
`;
export const LogoSpan = styled.span`
  color: #F0A51E;
`;



