import styled from 'styled-components';
import { TEXT_FONTSIZE } from '../../variables/Variables';
export const ProductsListThumb = styled.div`
  @media screen and (min-width: 1280px) {
    position: relative;
    :before {
        position: absolute;
        bottom: -2px;
        height: 60px;
        left: 0;
        right: 6px;
        background: ${props => props.theme.PRODUCT_LIST_THUMB_GRADIENT};
        pointer-events: none;
        z-index: 1;
        content: '';
      }
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
    
  @media screen and (min-width: 1280px) {
    max-height: 240px;
    overflow-x: hidden;
    overflow-y: auto;
    padding-right: 32px;

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.SIDEBAR_COLOR};
    }
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.INTAKE_DAILY_COLOR};
    }
  }
`;

export const ProductsQuote = styled.blockquote`
  border-left: 10px solid #ccc;
  padding: 0.5em 10px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: ${TEXT_FONTSIZE};
  line-height: 1.44;
  color: ${props => props.theme.MAIN_COLOR};
  margin: 10px 0;
  width: 280px;

  :before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
    > p {
      display: inline;
    }
  }
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const ProductsFigure = styled.figure`
  margin: 0;
`;

export const ProductsAuthor = styled.figcaption`
  font-style: italic;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: ${TEXT_FONTSIZE};
  line-height: 1.44;
  color: ${props => props.theme.MAIN_COLOR};
`;
