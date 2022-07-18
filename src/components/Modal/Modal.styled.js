import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { IoMdReturnLeft } from 'react-icons/io';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background-color: ${props => props.theme.TEXT_COLOR};
  @media screen and (min-width: 768px) {
    background-color: rgba(33, 33, 33, 0.12);
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.TEXT_COLOR};
  @media screen and (min-width: 120px) and (max-width: 767px) {
    max-width: 350px;
    border: 1px solid ${props => props.theme.LINE_COLOR};
  }

  @media screen and (min-width: 768px) {
    height: 100%;
    max-width: 672px;
    height: auto;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 120px;
  @media screen and (min-width: 768px) {
    padding: 72px 130px 72px 130px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 64px;
  }
`;
export const MobileBloc = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const ExitMobile = styled.div`
  width: 100%;
  height: 40px;
  background: #eff1f3;
  margin-bottom: 40px;
  background: ${props => props.theme.TEXT_COLOR};
`;
export const CloseBtn = styled(GrClose)`
  position: absolute;
  right: 13px;
  top: 20px;
  width: 12px;
  height: 12px;
  cursor: pointer;
  transition: 0.5s;

  filter: ${props => props.theme.FILTER};

  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
  :hover {
    transform: scale(1.3);
  }
`;
export const ExitMobBtn = styled.button`
  background: transparent;
`;

export const ExitMobBtnIcon = styled(IoMdReturnLeft)`
  margin-top: 12px;
  margin-left: 15px;
  cursor: pointer;
  color: ${props => props.theme.MAIN_COLOR};
`;
