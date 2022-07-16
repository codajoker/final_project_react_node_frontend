import styled from 'styled-components';
import {
  LINE_COLOR,
  TEXT_FONTSIZE,
  MAIN_COLOR,
  SECONDARY_COLOR,
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

    cursor: pointer;

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
    :first-child {
      width: 130px;
    }
    :last-child{
      width: 65px;
      white-space: nowrap;
    text-overflow: none;
    }
    font-size: ${TEXT_FONTSIZE};
    line-height: 17px;
    text-align: start;
    letter-spacing: 0.04em;

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
    
    }
  }
`;


export const Calories = styled.span`
   font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: ${TEXT_FONTSIZE};
  }
`;
