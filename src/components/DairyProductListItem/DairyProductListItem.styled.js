import styled from 'styled-components';
import { TEXT_FONTSIZE } from '../../variables/Variables';
export const Product = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  margin-bottom: 20px;
  color: ${props => props.theme.MAIN_COLOR};

  :last-child {
    position: relative;
    z-index: 1;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 0;
    height: 10px;
    width: 10px;
    margin-left: 17px;
    cursor: pointer;

    > svg {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;

      > path {
        stroke: ${props => props.theme.SECONDARY_COLOR};
      }
    }
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
    width: 570px;
  }
`;
export const ProductInfo = styled.div`
  display: flex;
  > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid ${props => props.theme.LINE_COLOR};
    padding-bottom: 8px;
    width: 49px;
    :first-child {
      width: 130px;
    }

    :last-child {
      flex: 0 0 65px;

      white-space: nowrap;
      text-overflow: none;
    }
    font-size: ${TEXT_FONTSIZE};
    line-height: 17px;
    text-align: right;
    letter-spacing: 0.04em;

    :not(:last-child) {
      margin-right: 32px;
    }
    :first-child {
      margin-right: 48px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 532px;
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
