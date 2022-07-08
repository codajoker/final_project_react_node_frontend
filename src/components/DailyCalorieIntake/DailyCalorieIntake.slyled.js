import styled from 'styled-components';
import * as palette from '../../variables/Variables';
import { Button } from '../../Button.styled';

export const CalorieIntake = styled.div`
  color: ${palette.MAIN_COLOR};
  line-height: 1.2;
  max-width: 560px;
  margin: 20px auto;
`;

export const Head = styled.h2`
  font-size: ${palette.SUBTITLE_FONTSIZE_MOB};
  margin-bottom: 20px;
  color: ${palette.MAIN_COLOR};
  @media screen and (min-width: 481px) {
    font-size: ${palette.SUBTITLE_FONTSIZE_DESC}
  }
`;

export const DailyNorm = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  color: ${palette.INTAKE_DAILY_COLOR};
`;

export const DailyNormValue = styled.span`
  font-size: 48px;
`;

export const HeadProducts = styled.h3`
  font-size: 14px;
  padding-top: 15px;
  border-top: 1px solid ${palette.LINE_COLOR};
`;

export const ProductsList = styled.ol`
  font-size: 14px;
  list-style: auto;
  padding: 0 0 0 25px;
  color: ${palette.SECONDARY_COLOR};
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
  max-height: 205px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey; 
    border-radius: 10px;
  }  
  &::-webkit-scrollbar-thumb {
    background: ${palette.BUTTON_COLOR}; 
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #b30000; 
  }
  + ${Button} {
    margin: 0 auto;
    display: block;
  }
`;
