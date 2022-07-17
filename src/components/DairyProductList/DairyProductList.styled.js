import styled from 'styled-components';
import { SIDEBAR_COLOR } from '../../variables/Variables';
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
`;
export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 240px;
  overflow-y: auto;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    width: 640px;
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
