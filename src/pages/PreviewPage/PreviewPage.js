import { React, Fragment } from 'react';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import {
  Main,
  BgBoxDesctop,
  BgBanana,
  BgStrawberry,
  BgLeaves,
  BgFigure,
  BgBoxTablet,
  BgBananaTablet,
  BgStrawberryTablet,
  BgLeavesTablet,
  BgFigureTablet,
} from './PrewiewPage.styled';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { fetchDailyRate } from '../../services/dailyRateApi';
import { toast } from 'react-toastify';

const PreviewPage = () => {
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
      toast.error('Помилка серверу, спробуйте пізніше');
    }
  };

  return (
    <Fragment>
      <Header />

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
};

export default PreviewPage;
