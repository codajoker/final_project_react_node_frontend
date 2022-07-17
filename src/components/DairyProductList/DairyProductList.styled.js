import styled from "styled-components";
import { TEXT_FONTSIZE,MAIN_COLOR, SIDEBAR_COLOR, INTAKE_DAILY_COLOR } from "../../variables/Variables";
export const ProductsListThumb = styled.div`
 position: relative;
 max-height: 240px;
 :before {
    position: absolute;
    bottom: -2px;
    height: 60px;
    left: 0;
    right: 6px;
    background: linear-gradient(0, rgba(255,255,255,1), rgba(255,255,255,0));
    pointer-events: none;
    z-index: 1;
    content: '';
  }
  @media screen and (max-width: 767px) {
    :before {
      right: 0;
      height: 40px;
    }
  }
`

export const ProductsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 240px;
    overflow-y: auto;
    align-items: flex-start;
    padding-right: 15px;
    
  @media screen and (min-width: 768px) {
    width: 600px;

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: ${SIDEBAR_COLOR}; 
    }  
    ::-webkit-scrollbar-thumb {
      background: ${INTAKE_DAILY_COLOR}; 
    }
  }
`

export const ProductsQuote = styled.blockquote`
  border-left: 10px solid #ccc;
  padding: 0.5em 10px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: ${TEXT_FONTSIZE};
  line-height: 1.44;
  color: ${MAIN_COLOR};
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
  color: ${MAIN_COLOR};
`;