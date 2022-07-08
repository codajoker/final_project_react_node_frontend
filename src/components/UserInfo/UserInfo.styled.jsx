import styled from "styled-components";
import * as palette from '../../variables/Variables';

export const UserInfoContainer = styled.div`
background-color: #EFF1F3;

@media (min-width: 768px) {
    background-color: ${palette.BACKGROUND_COLOR};
}
@media (min-width: 1444px) {
    background-color: #EFF1F3;
    
}`;

export const UserInfoList = styled.ul`
list-style: none;
display: flex;
li {
    margin-right: 16px;
}`;

export const UserText = styled.h2`
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 700;
font-size: ${palette.TEXT_FONTSIZE};
line-height: 13px;
text-align: right;
letter-spacing: 0.04em;

color: ${palette.MAIN_COLOR};

}`;



export const UserExit = styled.h2`
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 700;
font-size: ${palette.TEXT_FONTSIZE};
line-height: 13px;
letter-spacing: 0.04em;

color: #9B9FAA;`;
