import styled from 'styled-components';
import {
  LINE_COLOR,
  TEXT_FONTSIZE,
  MAIN_COLOR,
  SECONDARY_COLOR,
  BUTTON_COLOR
} from '../../variables/Variables';

export const Product = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 280px;
  margin-bottom: 20px;
  color: ${MAIN_COLOR};
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 0;
    height: 10px;
    width: 10px;
    min-width: 10px;
    margin-left: 8px;

    cursor: pointer;

    :hover > svg > path{
      stroke: ${MAIN_COLOR};
    }

    > svg {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;

      > path {
        stroke: ${SECONDARY_COLOR};
      }
    }
  }
  @media screen and (max-width: 767px) {
    position: relative;
  }
  @media screen and (min-width: 768px) {
    width: 565px;
    & > button {
      height: 12px;
      width: 12px;
    }
  }
`;
export const ProductInfo = styled.div`
  display: flex;
  > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid ${LINE_COLOR};
    padding-bottom: 8px;
    width: 49px;
    font-size: ${TEXT_FONTSIZE};
    line-height: 17px;
    text-align: start;
    letter-spacing: 0.04em;
    :first-child {
      width: 120px;
    }
    :last-child{
      width: 65px;
      white-space: nowrap;
      text-overflow: none;
    }
    :not(:first-child) {
      text-align: right;
    }
    :not(:last-child) {
      margin-right: 8px;
    }
  }


  @media screen and (min-width: 768px) {
    width: 520px; 
    justify-content: space-between;
    > div {
      text-align: end;
      padding-bottom: 20px;
      margin-right: 0;
      width: 106px;
      margin: 0;
      :first-child {
        width: 240px;
        text-align: start;
      }
      :last-child{
        width: 106px;
      }
      :not(:first-child){
        text-align: right;
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
  margin-left: -10px;
  :hover path{
    stroke: ${MAIN_COLOR};
  }
  path{
    stroke: ${SECONDARY_COLOR};
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
  margin-left: -30px;
  color: ${MAIN_COLOR};
  font-family: Verdana;
  height: 38px;
  ::placeholder{
    color: ${MAIN_COLOR};
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
    margin-top: 10px;
    gap: 5px;
    button{
      flex: 1 0 auto
    }
  }
  button{
    padding: 0;
    margin: 0;
    @media screen and (max-width: 767px) {
      display: inline-block;
      background: transparent;
      color: ${BUTTON_COLOR};
      border: 2px solid #FC842D;
      font-size: 10px;
      font-weight: 700;
      padding: 5px 8px;
      border-radius: 20px;
      letter-spacing: 0.04em;
      &:last-child{
        box-shadow: 0 4px 10px rgba(252, 132, 45, .5);
      }
      &:first-child{
        background: ${BUTTON_COLOR};
        color: #FFF;
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

  @media screen and (min-width: 768px) {
    + div, ~ button{
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 100%;
    right: 40px;
    background: #fff;
    z-index: 1;
    padding: 15px 10px;
    box-shadow: 3px 2px 10px 2px rgb(0 0 0 / 20%);
    border-radius: 8px;
    width: 165px;

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