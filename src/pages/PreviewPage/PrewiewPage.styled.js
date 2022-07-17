import styled from 'styled-components';

import bgImageDesktopBanana from '../../images/desktop/banana-desk.png';
import bgImageDesktopStrawberry from '../../images/desktop/strawberry-desc.png';
import bgImageDesktopLeaves from '../../images/desktop/leaves-desc.png';

import bgImageTabletBanana from '../../images/tablet/banana-tablet.png';
import bgImageTabletStrawberry from '../../images/tablet/strawberry-tablet.png';
import bgImageTabletLeaves from '../../images/tablet/leaves-tablet.png';

const Main = styled.main`
  padding-bottom: 100px;
  @media screen and (min-width: 320px) and (max-width: 1279px) {
    position: relative;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 110px;
  }
`;

const BgBoxDesctop = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
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
    background-size: contain;
    background-position: right;
    height: 50%;
    width: 100%;
    z-index: -1;
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
    width: 280px;
    height: 280px;
    z-index: -1;
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
    width: 750px;
    height: 846px;
    z-index: -1;
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
    width: 750px;
    height: 846px;
    z-index: -2;
  }
`;

const BgBoxTablet = styled.div`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100vw;
    z-index: -1;
  }
`;

const BgBananaTablet = styled.div`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${bgImageTabletBanana});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    height: 530px;
    width: 740px;
  }
`;

const BgStrawberryTablet = styled.div`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    position: absolute;
    right: 0;
    bottom: 15%;
    background-image: url(${bgImageTabletStrawberry});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    width: 100%;
    height: 340px;
  }
`;

const BgLeavesTablet = styled.div`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    position: absolute;
    right: 165px;
    bottom: 100px;
    background-image: url(${bgImageTabletLeaves});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;

    width: 600px;
    height: 100%;
  }
`;

const BgFigureTablet = styled.div`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url(${props => props.theme.BG_FIGURE_TABLET});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right bottom;
    width: 750px;
    height: 700px;
    z-index: -2;
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
  BgBananaTablet,
  BgStrawberryTablet,
  BgLeavesTablet,
  BgFigureTablet,
};
