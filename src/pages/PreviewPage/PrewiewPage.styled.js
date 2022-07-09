import styled from 'styled-components';
import bgImageForTablet from '../../images/tablet/bg-tablet.png';
import bgImageForDesctop from '../../images/desktop/desctop_min.png';

const Main = styled.main`
  height: 100vh;

  @media screen and (min-width: 320px) and (max-width: 1279px) {
    position: relative;
  }
`;

const BgBoxTablet = styled.div`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${bgImageForTablet});
    background-repeat: no-repeat;
    background-position: right bottom;
    height: 100vh;
    width: 100vw;
    z-index: -1;
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
    background-image: url(${bgImageForDesctop});
    background-repeat: no-repeat;
    background-position: right;
    height: 100vh;
    width: 100vw;
    z-index: -1;
  }
`;

export { Main, BgBoxTablet, BgBoxDesctop };
