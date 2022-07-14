import styled from 'styled-components';

export const Main = styled.main`
  @media screen and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 85px);
  }
`;

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
    z-index: 2;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 124px;
    right: 18px;
  }
`;

export const SidebarWrapper = styled.div`
  margin-top: auto;
  @media screen and (max-width: 767px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 50px;
  } ;
`;
