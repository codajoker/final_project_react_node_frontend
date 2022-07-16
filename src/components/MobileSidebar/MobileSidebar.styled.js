import styled from 'styled-components';

export const MobileSidebarWrap = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.SIDEBAR_COLOR};
  display: flex;
  padding: 4px 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileSidebarBtn = styled.button`
  display: block;
  width: 20px;
  height: 20px;
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
