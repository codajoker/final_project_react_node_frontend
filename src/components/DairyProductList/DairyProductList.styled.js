import styled from "styled-components";
import { SIDEBAR_COLOR } from "../../variables/Variables";
export const ProductsListThumb = styled.div`
 position: relative;
 max-height: 240px;
 @media screen and (min-width: 768px) {
    :before{
    width: 634px; 
    position: absolute;
    bottom: 0;
    height: 50px;
    left: 0;
    right: 0;
    background: linear-gradient(0, #fff, transparent);
    content: "";
  }}
  `
export const ProductsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    
@media screen and (min-width: 768px) {
    overflow-y: scroll;
    max-height: 230px;
    width: 640px;
    align-items: flex-start;
    ::-webkit-scrollbar { width: 6px;  }
    ::-webkit-scrollbar-thumb {background:rgb(38, 64, 97); }
    ::-webkit-scrollbar-track { background: ${SIDEBAR_COLOR} }
}

`