import moment from 'moment';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
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
// import { DairyProductList } from '../../components/DairyProductList/DairyProductList';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { addProduct } from '../../redux/products/productsOperations';
import Header from '../../components/Header/Header';
import MobileSidebar from '../../components/MobileSidebar/MobileSidebar';
import { useDetectClickOutside } from 'react-detect-click-outside';

export default function DiaryPage() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [mobileAddSelected, setMobileAddSelected] = useState(false);
  const dispatch = useDispatch();
  const today = moment();
  const disableFutureDt = current => {
    return current.isBefore(today);
  };
  const formatedDate = moment(date).format('DD.MM.yyyy');

  const closeDropdown = () => {
    setOpen(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  const formSubmitHandler = data => {
    const { product, weight } = data;
    // const addedProduct = productList.find(
    //   product => product.toLowerCase() === product.toLowerCase()
    // );
    // if (addedProduct) {
    //   alert(`${product} is already in contacts.`);
    //   return;
    // }
    dispatch(
      addProduct({
        diary_day: formatedDate,
        meal: { title: product, weight_g: parseInt(weight) },
      })
    );
    setMobileAddSelected(false);
    addProduct(data);
  };

  return (
    <Fragment>
      <Header />
      <PageWrap>
        <MobileSidebar onGoBack={() => setMobileAddSelected(false)} />
        <Container>
          <CalendarWrap>
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
          {!mobileAddSelected && (
            <AddBtnMobile
              className={'showOnMobile'}
              onClick={() => setMobileAddSelected(true)}
            >
              <BsPlusLg size={14} />
            </AddBtnMobile>
          )}
          <ListWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
            {/* <DairyProductList products={products} /> */}
          </ListWrap>
        </Container>
        <SidebarWrap>
          <RightSidebar />
        </SidebarWrap>
      </PageWrap>
    </Fragment>
  );
}
