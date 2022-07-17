import styled from 'styled-components';
import { SIDEBAR_COLOR } from '../../variables/Variables';
export const ProductsListThumb = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    max-height: 240px;
    :before {
      width: 634px;
      position: absolute;
      bottom: 0;
      height: 60px;
      left: 0;
      right: 0;
      background: linear-gradient(0, rgba(255,255,255,1), rgba(255,255,255,0));
      pointer-events: none;
      content: '';
    }
  }
`;
export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
    max-height: 230px;

  @media screen and (min-width: 768px) {
    overflow-y: auto;
   
    width: 640px;
    align-items: flex-start;
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(38, 64, 97);
    }
    ::-webkit-scrollbar-track {
      background: ${SIDEBAR_COLOR};
    }
    
  
  }
`;
