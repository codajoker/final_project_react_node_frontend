import styled from 'styled-components';
import * as palette from '../../variables/Variables';

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
  color: ${palette.MAIN_COLOR};
  margin-right: 15px;
  @media screen and (min-width: 1280px) {
    margin-left: 20px;
  }
`;

export const VerticalLine = styled.div`
  display: block;
  height: 32px;
  border-right: 2px solid;
  border-color: ${palette.SECONDARY_COLOR};
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
  color: ${palette.SECONDARY_COLOR};
  margin-left: 15px;
  &:hover {
    color: ${palette.MAIN_COLOR};
      transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 1280px) {
    margin-left: 20px;
  }
`;
