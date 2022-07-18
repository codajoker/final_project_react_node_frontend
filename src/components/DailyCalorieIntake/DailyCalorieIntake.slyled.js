import styled from 'styled-components';
import * as palette from '../../variables/Variables';
import { Button } from '../../Button.styled';

export const CalorieIntake = styled.div`
  color: ${palette.MAIN_COLOR};
  line-height: 1.2;
  max-width: 410px;
`;

export const Head = styled.h2`
  font-size: ${palette.SUBTITLE_FONTSIZE_MOB};
  margin-bottom: 20px;
  text-align: center;
  color: ${props => props.theme.MAIN_COLOR};
  @media screen and (min-width: 768px) {
    font-size: ${palette.SUBTITLE_FONTSIZE_DESC};
  }
`;

export const DailyNorm = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${props => props.theme.CALORIES_TEXT_COLOR};
`;

export const DailyNormValue = styled.span`
  font-size: 48px;
  color: ${props => props.theme.CALORIES_TEXT_COLOR};
`;

export const HeadProducts = styled.h3`
  font-size: 14px;
  padding-top: 12px;
  border-top: 1px solid ${props => props.theme.LINE_COLOR};
  letter-spacing: 0.04em;
  color: ${props => props.theme.SECONDARY_TEXT_COLOR};
`;

export const ProductsList = styled.ol`
  font-size: 14px;
  list-style: auto;
  padding: 0 0 0 23px;
  color: ${props => props.theme.SECONDARY_COLOR};
  letter-spacing: 0.04em;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
  max-height: 125px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.SIDEBAR_COLOR};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.INTAKE_DAILY_COLOR};
  }
`;

export const EmptyProducts = styled.div`
  color: ${palette.SECONDARY_COLOR};
  margin: 20px 0 40px;
`;

export const ButtonStart = styled(Button)`
  margin: 0 auto;
  display: block;
  width: 210px;
  /* background: transparent; */
`;
