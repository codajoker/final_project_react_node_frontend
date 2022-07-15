import styled from 'styled-components';
import * as palette from '../../variables/Variables';
import bgImageDesktop from '../../images/desktop/bg-3-health-calculator.png';
import bgImageTablet from '../../images/tablet/bg-1-tablet.png';

export const Container = styled.aside`
  background-color: ${palette.SIDEBAR_COLOR};
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  line-height: 1.2;
  font-size: 14px;
  color: ${palette.MAIN_COLOR};
  padding: 40px 20px;
  letter-spacing: 0.04em;
  @media (min-width: 481px) {
    padding: 80px 30px;
  }
  @media (min-width: 481px) and (max-width: 1279px) {
    background-image: url(${bgImageTablet});
    background-position: bottom right;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    > div {
      flex: 0 0 45%;
    }
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    max-width: 520px;
    width: 35%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 292px 8% 50px 5%;
    background-image: url(${bgImageDesktop});
    background-position: center right;
  }
`;

export const Head = styled.h3`
  margin-bottom: 20px;
  @media screen and (min-width: 481px) {
    margin-bottom: 30px;
  }
`;

export const CalloriesList = styled.ul`
  color: ${palette.SECONDARY_COLOR};
  margin-bottom: 30px;
  @media (min-width: 481px) and (max-width: 1279px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 50px;
  }
  li {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 10px;
    span:last-child {
      white-space: nowrap;
    }
  }
`;

export const ProductsList = styled.div`
  color: ${palette.SECONDARY_COLOR};
  line-height: 1.4;
  :first-letter {
    text-transform: uppercase;
  }
`;

export const EmptyProducts = styled.div`
  color: ${palette.SECONDARY_COLOR};
`;
