import { React, Fragment } from 'react';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import { Main, BgBoxTablet, BgBoxDesctop } from './PrewiewPage.styled';
import Header from '../../components/Header/Header';

const PreviewPage = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <DailyCaloriesForm />
        <BgBoxTablet />
        <BgBoxDesctop />
      </Main>
    </Fragment>
  );
};

export default PreviewPage;
