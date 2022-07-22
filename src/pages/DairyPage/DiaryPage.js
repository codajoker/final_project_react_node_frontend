import moment from 'moment';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { BsPlusLg } from 'react-icons/bs';
import { RiCalendar2Line } from 'react-icons/ri';
import { Container } from '../../styles/Container.styled';
import {
  CalendarWrap,
  CalendarTitle,
  ListWrap,
  AddBtnMobile,
  Calendar,
  PageWrap,
  SidebarWrap,
} from './DiaryPage.styled';
import {DiaryProductForm, DairyProductList, RightSidebar, Header, MobileSidebar, Loader} from '../../components/index';
import {
  getIsLoading,
  getProductsList,
} from '../../redux/products/productsSelectors';
import {
  addProduct,
  getProductsListByDate,
} from '../../redux/products/productsOperations';
import { useDetectClickOutside } from 'react-detect-click-outside';

export default function DiaryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [date, setDate] = useState(
    searchParams.has('date')
      ? new Date(parseInt(searchParams.get('date')))
      : new Date()
  );
  const [open, setOpen] = useState(false);
  const isLoading = useSelector(getIsLoading);
  const [mobileAddSelected, setMobileAddSelected] = useState(false);
  const productsList = useSelector(getProductsList);
  const dispatch = useDispatch();
  const today = moment();
  const disableFutureDt = current => {
    return current.isBefore(today);
  };
  const formatedDate = moment(date).format('DD.MM.yyyy');

  useEffect(() => {
    dispatch(getProductsListByDate(formatedDate));
    setSearchParams({ date: date.valueOf() });
  }, [date]);

  const closeDropdown = () => {
    setOpen(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  const formSubmitHandler = data => {
    const { product, weight } = data;
    const payload = {
      diary_day: formatedDate,
      meal: { title: product, weight_g: weight },
    };
    dispatch(addProduct(payload));
    setMobileAddSelected(false);
  };

  return (
    <>
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
            {isLoading ? (
              <Loader />
            ) : (
              <DairyProductList products={productsList} date={date} />
            )}
          </ListWrap>
          {!mobileAddSelected && (
            <AddBtnMobile
              primary
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
    </>
  );
}
