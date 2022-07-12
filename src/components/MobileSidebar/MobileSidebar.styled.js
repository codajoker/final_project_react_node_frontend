import styled from 'styled-components';
import * as palette from '../../variables/Variables';

export const MobileSidebarWrap = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${palette.SIDEBAR_COLOR};
  display: flex;
  padding: 4px 20px;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileSidebarBtn = styled.button`
  display: block;
  width: 15px;
  height: 15px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 1px;
`;

export const MobileSidebarInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding: 0;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  flex-grow: 0;
`;