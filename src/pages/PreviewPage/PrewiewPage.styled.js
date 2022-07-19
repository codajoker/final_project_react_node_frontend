import styled from 'styled-components';

import bgImageDesktopBanana from '../../images/desktop/banana-desk.png';
import bgImageDesktopStrawberry from '../../images/desktop/strawberry-desc.png';
import bgImageDesktopLeaves from '../../images/desktop/leaves-desc.png';
const Main = styled.main`
  @media screen and (min-width: 320px) and (max-width: 1279px) {
    /* position: relative; */
  }
`;

const BgBoxDesctop = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    overflow: hidden;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -1;
  }
`;

const BgBanana = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${bgImageDesktopBanana});
    background-repeat: no-repeat;
    background-position: top right;
    height: 100%;
    width: 100%;
    z-index: -1;
    animation: rotate 1.5s cubic-bezier(0.68,-0.55,0.265,1);
  }
`;

const BgStrawberry = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    right: 25px;
    bottom: 35px;
    background-image: url(${bgImageDesktopStrawberry});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    width: 100%;
    height: 38%;
    z-index: -1;
    animation: slideDown 1.5s cubic-bezier(0.68,-0.2,0.265,1);
  }
`;

const BgLeaves = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 0;
    left: 30%;
    background-image: url(${bgImageDesktopLeaves});
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
    z-index: -1;
    animation: opacity 3s linear;
  }
`;

const BgFigure = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url(${props => props.theme.BG_FIGURE});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    width: 100vw;
    height: 100vh;
    z-index: -2;
    animation: slideFigure 1.3s cubic-bezier(0.68,-0.2,0.265,1);
  }
`;

const BgBoxTablet = styled.div`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    z-index: -1;
    animation: opacity 3s linear;
  }
`;

export {
  Main,
  BgBoxDesctop,
  BgBanana,
  BgStrawberry,
  BgLeaves,
  BgFigure,
  BgBoxTablet,
};
