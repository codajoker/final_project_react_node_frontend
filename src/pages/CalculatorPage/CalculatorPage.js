import React from 'react';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import Header from '../../components/Header/Header';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import {
  Main,
  SidebarWrapper,
  UserInfoContainer,
} from './CalculatorPage.styled';
import UserInfo from '../../components/UserInfo/UserInfo';

const CalculatorPage = () => {
  return (
    <>
      <Header />
      <Main>
        <UserInfoContainer>
          <UserInfo />
        </UserInfoContainer>

        <DailyCaloriesForm />

        <SidebarWrapper>
          <RightSidebar />
        </SidebarWrapper>
      </Main>
    </>
  );
};

export default CalculatorPage;
