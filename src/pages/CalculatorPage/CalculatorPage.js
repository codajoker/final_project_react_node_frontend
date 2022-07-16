import React from 'react';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import Header from '../../components/Header/Header';
import MobileSidebar from '../../components/MobileSidebar/MobileSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { Main, SidebarWrapper } from './CalculatorPage.styled';

const CalculatorPage = () => {
  return (
    <>
      <Header />
      <MobileSidebar />
      <Main>
        <DailyCaloriesForm />

        <SidebarWrapper>
          <RightSidebar />
        </SidebarWrapper>
      </Main>
    </>
  );
};

export default CalculatorPage;
