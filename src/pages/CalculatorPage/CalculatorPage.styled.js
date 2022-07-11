import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: flex-end;
    padding: 15px 20px 15px 0;
    background-color: #eff1f3;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 35px;
    right: 104px;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 130px;
    right: 5px;
    z-index: 2;
  }
`;

export const SidebarWrapper = styled.div`
  @media screen and (max-width: 767px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 50px;
  } ;
`;
