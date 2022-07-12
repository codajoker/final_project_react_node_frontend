import moment from 'moment';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { IconContext } from 'react-icons';
import { RiCalendar2Line } from 'react-icons/ri';
import { Container } from '../../Container.styled';
import {
  CalendarWrap,
  CalendarTitle,
  ListWrap,
  AddBtnMobile,
} from './DiaryPage.styled';
import DiaryProductForm from '../../components/DairyProductForm/DairyProductForm';
// import { DairyProductList } from '../../components/DairyProductList/DairyProductList';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { BsPlusLg } from 'react-icons/bs';
import { addProduct } from '../../redux/products/productsOperations';
import Header from '../../components/Header/Header';
import MobileSidebar from '../../components/MobileSidebar/MobileSidebar';

export default function DiaryPage() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [mobileAddSelected, setMobileAddSelected] = useState(false);
  const dispatch = useDispatch();

  const formatedDate = moment(date).format('DD.MM.yyyy');

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
      <MobileSidebar onGoBack={() => setMobileAddSelected(false)} />
      <Container>
        <CalendarWrap>
          <CalendarTitle>{formatedDate}</CalendarTitle>
          <Datetime
            open={open}
            value={date}
            renderInput={() => (
              <IconContext.Provider
                value={{
                  style: {
                    color: '#9B9FAA',
                    width: '18px',
                    height: '20px',
                    verticalAlign: 'middle',
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
      <RightSidebar />
    </Fragment>
  );
}
