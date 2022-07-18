import styled from 'styled-components';
import {
  TEXT_FONTSIZE,
  BUTTON_COLOR
} from '../../variables/Variables';

export const Product = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  margin-bottom: 20px;
  color: ${props => props.theme.MAIN_COLOR};

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 0;
    height: 10px;
    width: 10px;
    min-width: 10px;
    margin-left: 17px;
    cursor: pointer;

    :hover > svg > path{
      stroke: ${props => props.theme.ICONS_COLOR_HOVER};
    }

    > svg {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;

      > path {
        stroke: ${props => props.theme.ICONS_COLOR};
      }
    }
  }
  @media screen and (max-width: 767px) {
    position: relative;
  }
  @media screen and (min-width: 768px) {
    width: 540px;
    & > button {
      height: 12px;
      width: 12px;
      margin-left: 32px;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 595px;
  }
`;
export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid ${props => props.theme.LINE_COLOR};
    padding-bottom: 8px;
    width: 49px;
    font-size: ${TEXT_FONTSIZE};
    line-height: 17px;
    text-align: right;
    letter-spacing: 0.04em;
    :first-child {
      width: 120px;
      margin-right: 48px;
    }

    :last-child {
      flex: 0 0 65px;

      white-space: nowrap;
      text-overflow: none;
    }
    :not(:last-child) {
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    justify-content: space-between;
    > div {
      text-align: end;
      padding-bottom: 20px;
      margin-right: 0;
      flex: 0 0 106px;
      margin: 0;
      :first-child {
        flex: 0 0 240px;
        text-align: start;
      }

      :last-child {
        flex: 0 0 106px;
      }
    }
  }
  @media screen and (max-width: 1279px) {
    width: 620px;
    > div {
      :not(:last-child),
      :first-child {
        margin-right: 30px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    > div {
      :not(:last-child),
      :first-child {
        margin-right: 8px;
      }
      :last-child {
        span {
          font-size: 10px;
        }
      }
    }
  }
`;

export const Calories = styled.span`
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: ${TEXT_FONTSIZE};
  }
`;

export const EditButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  margin-left: -5px;
  
  :hover path{
    stroke: ${props => props.theme.ICONS_COLOR_HOVER};
  }
  path{
    stroke: ${props => props.theme.ICONS_COLOR};
  }
  @media screen and (min-width: 768px) {
    margin-left: -25px;
    height: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: -40px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 15px 0 8px;
    svg {
      height: 10px;
      width: 10px;
    }
  }
`;

export const FormInput = styled.div`
  position: relative;
  font-size: 14px;
  > span{
    position: absolute;
    right: 3px;
    bottom: 21px;
    pointer-events: none;
  }
`;

export const FormInputWeight = styled.input`
  text-align: right;
  padding: 0 15px 20px 10px;
  font-size: 14px;
  letter-spacing: 0.04em;
  border-bottom: 1px solid #E0E0E0;
  width: 106px;
  color: ${props => props.theme.MAIN_COLOR};
  font-family: Verdana;
  height: 38px;
  background: transparent;
  :focus{
    border-bottom-color: ${props => props.theme.MAIN_COLOR};
  }
  ::placeholder{
    color: ${props => props.theme.MAIN_COLOR};
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type=number] {
    -moz-appearance: textfield;
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 0;
    justify-content: center;
    right: -30px;
    width: 20px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 20px;
    gap: 20px;
    button{
      flex: 1 0 auto
    }
  }
  button{
    padding: 0;
    margin: 0;
    :disabled{
      pointer-events: none;
      opacity: .5;
    }
    @media screen and (min-width: 768px) {
      span{
        display: none;
      }
    }
    @media screen and (max-width: 767px) {
      display: inline-block;
      background: transparent;
      color: ${BUTTON_COLOR};
      border: 1px solid #FC842D;
      font-weight: 500;
      padding: 8px;
      border-radius: 20px;
      letter-spacing: 0.04em;
      &:last-child{
        box-shadow: 0 1px 5px rgba(252, 132, 45, .5);
      }
      &:first-child{
        background: ${BUTTON_COLOR};
        color: #FFF;
      }
      svg{
        display: none;
      }
    }
    svg{
      width: 18px;
      height: 18px;
    }
    :first-child path{
      stroke: #1bb91b;
    }
    :last-child path{
      stroke: #f33
    }
  }
`;

export const FormEdit = styled.form`
  position: relative;
  margin-right: 30px;

  @media screen and (min-width: 768px) {
    + div, ~ button, > div:first-child{
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.INTAKE_DAILY_COLOR};
    z-index: 1;
    padding: 30px;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: slideUp 0.8s cubic-bezier(0.68,-0.55,0.265,1.55);
    border-radius: 10px 10px 0 0;
    > div:first-child{
      margin-bottom: 20px;
    }
    input{
      margin: 0;
      padding-bottom: 5px;
      height: auto;
      width: 100%;
    }
    span{
      bottom: 6px;
    }
  }
`;    