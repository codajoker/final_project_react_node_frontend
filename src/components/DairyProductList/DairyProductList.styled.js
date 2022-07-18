import styled from "styled-components";
import { SIDEBAR_COLOR, INTAKE_DAILY_COLOR } from "../../variables/Variables";
export const ProductsListThumb = styled.div`
 position: relative;
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
    overflow-x: hidden;
    overflow-y: auto;
    align-items: flex-start;
    padding-right: 15px;
    
  @media screen and (min-width: 768px) {
    padding-right: 32px;

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