import styled from "styled-components";
import * as palette from '../../variables/Variables';


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
line-height: 1.1;
text-align: right;
letter-spacing: 0.04em;

color: ${palette.MAIN_COLOR};

}`;

export const VerticalLine = styled.div`
display: block;
    height: 32px;
    border-right: 2px solid;
    border-color: ${palette.SECONDARY_COLOR}`;

export const UserExit = styled.button`
font-family: 'Gotham Pro';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 1.1;
letter-spacing: 0.04em;
color: ${palette.SIDEBAR_TEXT_COLOR}
margin-left: 15px;`;