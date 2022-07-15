import styled from 'styled-components';

export const Main = styled.main`
  @media screen and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 85px);
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
