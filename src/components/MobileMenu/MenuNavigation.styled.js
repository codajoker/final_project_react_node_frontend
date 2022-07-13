import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as palette from '../../variables/Variables';

export const MenuWrap = styled.div`
  @media screen and (max-width: 1279px) {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
`;

export const MenuNav = styled.nav`
  display: none;

  @media screen and (min-width: 1280px) {
    width: 268px;
    display: flex;
    height: 27px;
    flex-direction: row;
  }
  
  @media screen and (max-width: 1279px) {
    height: 100vh;
    position: fixed;
    z-index: 100;
    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    top: 84px;
    right: 0;
    flex-direction: column;
    background: ${palette.INTAKE_DAILY_COLOR};
    align-items: center;
    padding-top: 100px;
    display: flex;
    gap: 15px;
    margin-bottom: 2px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 60px;
  }
`;

export const MenuLink = styled(NavLink)`
  font-family: 'GothamPro';
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${palette.SECONDARY_COLOR};

  &.active {
    color: ${palette.TEXT_COLOR};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${palette.TEXT_FONTSIZE};
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-family: 'GothamPro';
    font-weight: 700;
    margin-right: 16px;
    color: ${palette.SECONDARY_COLOR};
    &:hover {
      color: ${palette.MAIN_COLOR};
      transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    &.active {
      color: ${palette.MAIN_COLOR};
    }
    &:first-child {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 1279px) {
    font-size: 24px;
    line-height: 1.2;
    color: ${palette.SECONDARY_COLOR};
    &.active {
      color: ${palette.TEXT_COLOR};
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const BurgerIcon = styled.span`
  @media screen and (max-width: 1279px) {
    display: block;
    width: 18px;
    height: 2px;
    background-color: ${palette.MAIN_COLOR};
    transition: top 0.3s;
    position: relative;
    &:before, &:after{
      width: 100%;
      height: 2px;
      background-color: ${palette.MAIN_COLOR};
      display: inline-block;
      margin: 0;
      transition: top 0.3s;
      content: '';
      position: absolute;
      left: 0;
    }
    &::before {
      top: -6px;
    }
    &::after {
      top: 6px;
    }
  }
`;

export const BurgerButton = styled.button`
  display: none;
  @media screen and (max-width: 1279px) {
    display: block;
    background-color: transparent;
    user-select: none;
    outline: none;
    border: 0 none;
    width: 24px;
    height: 24px;
  }
  &.close{
    span{
      background-color: transparent;
      &:before, &:after{
        top: 0;
      }
      &:before{
        transform: rotate(45deg);
      }
      &:after{
        transform: rotate(-45deg);
      }
    }
    ~ ${MenuNav}{
      width: 100%;
      opacity: 1;
    }
  }
`;