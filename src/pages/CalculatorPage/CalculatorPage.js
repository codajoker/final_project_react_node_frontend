import React, { Fragment } from 'react';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import Header from '../../components/Header/Header';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { SidebarWrapper, UserInfoContainer } from './CalculatorPage.styled';
// import UserInfo from '../../components/UserInfo/UserInfo';

const CalculatorPage = () => {
  return (
    <>
      <Header />

      <UserInfoContainer></UserInfoContainer>

      <DailyCaloriesForm />

      <SidebarWrapper>
        <RightSidebar />
      </SidebarWrapper>
    </>
  );
};

export default CalculatorPage;
