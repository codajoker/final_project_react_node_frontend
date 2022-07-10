import styled from "styled-components";
import { SIDEBAR_COLOR } from "../../variables/Variables";

export const ProductsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    
@media screen and (min-width: 768px) {
    overflow-y: scroll;
    height: 240px;
    width: 640px;
    
    ::-webkit-scrollbar { width: 6px;  }
    ::-webkit-scrollbar-thumb {background:rgb(38, 64, 97); }
    ::-webkit-scrollbar-track { background: ${SIDEBAR_COLOR} }
}
@media screen and (min-width: 1280px) {
    height: 270px;
   
}
`