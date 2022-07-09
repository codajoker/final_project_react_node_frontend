import React from 'react';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';

import { Main, BgBoxTablet, BgBoxDesctop } from './PrewiewPage.styled';

const PreviewPage = () => {
  return (
    <Main>
      <DailyCaloriesForm />
      <BgBoxTablet />
      <BgBoxDesctop />
    </Main>
  );
};

export default PreviewPage;
