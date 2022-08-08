import { toast } from 'react-toastify';
import { React, Fragment } from 'react';
import {
  Main,
  BgBoxDesctop,
  BgBanana,
  BgStrawberry,
  BgLeaves,
  BgFigure,
  BgBoxTablet,
} from './PrewiewPage.styled';
import {
  BgBananaTablet,
  BgStrawberryTablet,
  BgLeavesTablet,
  BgFigureTablet,
} from '../../pages/LoginPage/LoginPage.styled';

import { Header, Modal, DailyCaloriesForm } from '../../components/index';
import { useEffect, useState } from 'react';
import { fetchDailyRate } from '../../services/dailyRateApi';
import { useTranslation } from 'react-i18next';

export default function PreviewPage({ theme, toggleTheme }) {
  const { t } = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  const [dailyRate, setDailyRate] = useState(null);

  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  useEffect(() => {
    const close = e => {
      if (e.key === 'Escape') {
        setModalShow(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const handleFetchDailyRate = async userData => {
    setDailyRate(null);
    try {
      const { data } = await fetchDailyRate(userData);      
      setDailyRate(data);
    } catch (error) {
          toast.error(t('calc_form.toast_err_msg'));
    }
  };

  return (
    <Fragment>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Main>
        <DailyCaloriesForm onOpen={handleOpen} getData={handleFetchDailyRate} />

        <BgBoxTablet>
          <BgBananaTablet />
          <BgStrawberryTablet />
          <BgLeavesTablet />
          <BgFigureTablet />
        </BgBoxTablet>

        <BgBoxDesctop>
          <BgBanana />
          <BgStrawberry />
          <BgLeaves />
          <BgFigure />
        </BgBoxDesctop>
        {dailyRate && (
          <Modal
            isOpen={modalShow}
            onCancel={handleClose}
            dailyRate={dailyRate}
          />
        )}
      </Main>
    </Fragment>
  );
}
