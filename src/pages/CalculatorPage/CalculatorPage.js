import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import Header from '../../components/Header/Header';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { tokenValid } from '../../redux/auth/authOperations';
import { Main, SidebarWrapper } from './CalculatorPage.styled';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
 dispatch(tokenValid())
  }, [])
  
  return (
    <>
      <Header />
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
