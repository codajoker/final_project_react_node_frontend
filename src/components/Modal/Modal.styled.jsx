import styled from "styled-components";
import { GrClose } from "react-icons/gr";
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
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  @media screen and (min-width: 768px) {
    background-color: rgba(33, 33, 33, 0.12);
  }
`

export const ModalContainer = styled.div`
position: relative;
background-color: white;
@media screen and (min-width: 120px) and (max-width: 767px) {
    max-width: 350px;
    height: 100%;
}
@media screen and (min-width: 768px) {
    max-width: 672px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;
  @media screen and (min-width: 768px) {
    padding: 72px 74px;
  }
`
export const MobileBloc = styled.div`
@media screen and (min-width: 768px) {
    display: none;
  }
`
export const ExitMobile = styled.div`
  width: 100%;
  height: 40px;
  background: #eff1f3;
  margin-bottom: 40px;
`
export const CloseBtn = styled(GrClose)`
  position: absolute;
  right: 13px;
  top: 20px;
  width: 12px;
  height: 12px;
  cursor: pointer;
  transition: 0.5s;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
}
 :hover {
      transform: scale(1.3);  
    }
`
export const ExitMobBtn = styled(IoMdReturnLeft)`
margin-top: 12px;
margin-left: 15px;
cursor: pointer;
`

// export const Title = styled.h2`
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 1.44;
//   color: #212121;
//   @media screen and (min-width: 768px) {
//     font-size: 26px;
//     line-height: 1.23;
//     text-align: center;
// }
// `
// export const Norm = styled.p`
//   font-weight: 700;
//   font-size: 48px;
//   line-height: 1.2;
//   text-align: center;
//   letter-spacing: 0.04em;
//   color: #264061;
//   margin-top: 40px;
// `
// export const TxtCcal = styled.span`
// font-size: 16px;
// `

// export const SecondTitle = styled.h3`
//   font-weight: 700;
//   font-size: 14px;
//   margin-top: 20px;
//   line-height: 1.2;
//   letter-spacing: 0.04em;
//   color: #212121;
// `
// export const ProductBloc = styled.div`
//   margin-top: 35px;
//   border-top: 1px solid #e0e0e0;
// `
// export const List = styled.ul`
//   list-style: none;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 1.2;
//   letter-spacing: 0.04em;
//   color: #9b9faa;
//   margin-top: 20px;
//   margin-bottom: 40px;
// `
