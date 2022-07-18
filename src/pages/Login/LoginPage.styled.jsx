import styled from 'styled-components';
import bgImageTabletBanana from '../../images/tablet/banana-tablet-login.png';
import bgImageTabletStrawberry from '../../images/desktop/strawberry-desc.png';
import bgImageTabletLeaves from '../../images/tablet/leave-tablet-login.png';

const BgBananaTablet = styled.div`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url(${bgImageTabletBanana});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right bottom;
    height: 530px;
    width: 740px;
  }
`;

const BgStrawberryTablet = styled.div`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    position: absolute;
    bottom: 23%;
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
    right: 40px;
    bottom: 100px;
    background-image: url(${bgImageTabletLeaves});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

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

export { BgBananaTablet, BgStrawberryTablet, BgLeavesTablet, BgFigureTablet };
