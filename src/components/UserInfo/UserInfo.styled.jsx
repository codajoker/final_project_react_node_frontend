import styled from 'styled-components';
import * as palette from '../../variables/Variables';
import { Box } from '@mui/material';
import { Button } from '../../styles/Button.styled';
export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 1280px) {
    z-index: 1;
    align-items: unset;
  }
`;

export const UserText = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 2.2;
  text-align: right;
  letter-spacing: 0.04em;

  color: ${props => props.theme.MAIN_COLOR};
  white-space: nowrap;
  margin-right: 15px;
  @media screen and (min-width: 1280px) {
    margin-left: 20px;
  }
`;

export const VerticalLine = styled.div`
  display: block;
  height: 32px;
  border-right: 2px solid;
  border-color: ${props => props.theme.SECONDARY_COLOR};
`;

export const UserExit = styled.button`
  background-color: transparent;
  font-style: normal;
  padding: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 2.2;
  letter-spacing: 0.04em;
  color: ${props => props.theme.SECONDARY_COLOR};
  margin-left: 15px;
  &:hover {
    color: ${props => props.theme.MAIN_COLOR};
    transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  cursor: pointer;

  @media screen and (min-width: 1280px) {
    margin-left: 20px;
  }
`;

export const Wrap = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background: ${props => props.theme.TEXT_COLOR};
  padding: 40px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;
export const ModalTxt = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: ${props => props.theme.MAIN_COLOR};
  @media screen and (min-width: 768px) {
    font-size: ${palette.SUBTITLE_FONTSIZE_DESC};
  }
`;
export const Btn = styled(Button)`
  padding: 13px 30px;
  @media screen and (min-width: 768px) {
    padding: 13px 45px;
  }
`;
