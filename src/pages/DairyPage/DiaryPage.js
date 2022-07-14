import moment from 'moment';
import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { BsPlusLg } from 'react-icons/bs';
import { RiCalendar2Line } from 'react-icons/ri';
import { Container } from '../../Container.styled';
import {
  CalendarWrap,
  CalendarTitle,
  ListWrap,
  AddBtnMobile,
  Calendar,
  PageWrap,
  SidebarWrap,
} from './DiaryPage.styled';
import DiaryProductForm from '../../components/DairyProductForm/DairyProductForm';
import { DairyProductList } from '../../components/DairyProductList/DairyProductList';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { getProductsList } from '../../redux/products/productsSelectors';
import {
  addProduct,
  getProductsListByDate,
} from '../../redux/products/productsOperations';
import Header from '../../components/Header/Header';
import MobileSidebar from '../../components/MobileSidebar/MobileSidebar';
import { useDetectClickOutside } from 'react-detect-click-outside';

export default function DiaryPage() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [mobileAddSelected, setMobileAddSelected] = useState(false);
  const productsList = useSelector(getProductsList);
  const dispatch = useDispatch();
  const today = moment();
  const disableFutureDt = current => {
    return current.isBefore(today);
  };

  const formatedDate = moment(date).format('DD.MM.yyyy');
  useEffect(() => {
    dispatch(getProductsListByDate(date));
  }, [date]);

  const closeDropdown = () => {
    setOpen(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  const formSubmitHandler = async data => {
    const { product, weight } = data;
    await dispatch(
      addProduct({
        diary_day: formatedDate,
        meal: { title: product, weight_g: parseInt(weight) },
      })
    );
    dispatch(getProductsListByDate(date));
    setMobileAddSelected(false);
  };

  return (
    <Fragment>
      <Header />
      <PageWrap>
        <MobileSidebar
          onGoBack={() => setMobileAddSelected(false)}
          mobileAddSelected={mobileAddSelected}
        />
        <Container>
          <CalendarWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
            <CalendarTitle>{formatedDate}</CalendarTitle>
            <div ref={ref}>
              <Calendar
                open={open}
                value={date}
                isValidDate={disableFutureDt}
                renderInput={() => (
                  <IconContext.Provider
                    value={{
                      style: {
                        color: '#9B9FAA',
                        width: '18px',
                        height: '20px',
                        verticalAlign: 'middle',
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <RiCalendar2Line
                      onClick={() => setOpen(!open)}
                      color="#9B9FAA"
                    />
                  </IconContext.Provider>
                )}
                timeFormat={false}
                onChange={momentObj => {
                  setDate(momentObj.toDate());
                  setOpen(false);
                }}
              />
            </div>
          </CalendarWrap>
          <div>
            <DiaryProductForm
              onSubmit={formSubmitHandler}
              className={mobileAddSelected ? '' : 'hideOnMobile'}
            />
          </div>

          <ListWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
            <DairyProductList products={productsList} date={date} />
          </ListWrap>
          {!mobileAddSelected && (
            <AddBtnMobile
              className={'showOnMobile'}
              onClick={() => setMobileAddSelected(true)}
            >
              <BsPlusLg size={14} />
            </AddBtnMobile>
          )}
        </Container>
        <SidebarWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
          <RightSidebar date={formatedDate} />
        </SidebarWrap>
      </PageWrap>
    </Fragment>
  );
}
