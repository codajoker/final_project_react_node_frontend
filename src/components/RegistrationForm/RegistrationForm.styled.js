import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as palette from '../../variables/Variables';
import { Button } from '../../Button.styled';
import { Container } from '../../Container.styled';
// import desctop from '../../images/desktop/desctop_min.png';
// import tablet from '../../images/tablet/bg-2-tablet.png';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export const WrapperLoginPage = styled(Container)`
  @media screen and (min-width: 320px) {
    padding-top: 40px;
    padding-bottom: 175px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 160px;
    padding-bottom: 250px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 160px;
    padding-bottom: 240px;
  }
`;

export const WrapperRegisterPage = styled(Container)`
  @media screen and (min-width: 320px) {
    padding-top: 40px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 160px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 160px;
    padding-bottom: 180px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-family: 'GothamPro';
  font-weight: 700;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 60px;
  color: ${props => props.theme.BUTTON_COLOR};
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Label = styled.label`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  border-bottom: 1px solid #e0e0e0;
  width: 280px;
  height: 40px;
  padding-bottom: 20px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: ${palette.TEXT_FONTSIZE};
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.MAIN_COLOR};
  border-bottom: 1px solid ${props => props.theme.LINE_COLOR};
  transition: border-color 0.3s;
  background-color: rgba(117, 190, 218, 0);

  ::placeholder {
    color: ${props => props.theme.SECONDARY_COLOR};
  }

  &:focus {
    border-bottom-color: ${props => props.theme.MAIN_COLOR};
  }

  &.active {
    color: ${props => props.theme.MAIN_COLOR};
  }

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AuthButton = styled(Button)`
  width: 182px;
  background: transparent;

  :hover,
  :focus {
    background: ${props => props.theme.BUTTON_COLOR};
    color: #fff;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 32px;
    }
  }
`;

export const LinkButton = styled(NavLink)`
  display: inline-block;
  text-align: center;
  background: ${props =>
    props.primary ? palette.BUTTON_COLOR : 'transparent'};
  color: ${props => (props.primary ? '#fff' : palette.BUTTON_COLOR)};
  box-shadow: ${props =>
    props.primary ? '0 4px 10px rgba(252, 132, 45, .5)' : null};
  border: 2px solid #fc842d;
  font-size: 14px;
  font-weight: 700;
  width: 182px;
  padding: 13px 25px;
  border-radius: 30px;
  transition: background 200ms linear, color 200ms linear;
  cursor: pointer;

  :hover,
  :focus {
    background: ${props => (props.primary ? '#fff' : palette.BUTTON_COLOR)};
    color: ${props => (props.primary ? palette.BUTTON_COLOR : '#fff')};
    outline: none;
  }

  :disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;

export const Text = styled.span`
  color: #e10000;
  font-size: 0.77em;
  margin-top: 5px;
  position: relative;
`;

export const Stub = styled.div`
  height: 20px;
  position: relative;
`;

// export const BackgroundImage = styled.div`
//   display: block;
//   position: absolute;
//   right: 0;
//   z-index: -1;
//   width: 100vw;
//   height: 100vh;

//   @media screen and (min-width: 768px) and (max-width: 1279px) {
//     top: 245;
//     background-image: url(${tablet});
//     background-repeat: no-repeat;
//     background-position: right;
//     background-size: contain;
//   }

//   @media screen and (min-width: 1280px) {
//     top: 0;
//     background-image: url(${desctop});
//     background-size: contain;
//     background-position: right;
//     background-repeat: no-repeat;
//   }
// `;

export const ShowPasswIcon = styled(RemoveRedEyeOutlinedIcon)`
  position: absolute;
  right: 15px;
  color: ${props => props.theme.SECONDARY_COLOR};
  cursor: pointer;
`;
export const HidePasswIcon = styled(VisibilityOffOutlinedIcon)`
  position: absolute;
  right: 15px;
  color: ${props => props.theme.SECONDARY_COLOR};
  cursor: pointer;
`;
