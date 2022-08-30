import moment from 'moment';
import { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { RiCalendar2Line } from 'react-icons/ri';
import {
  setMobileAddSelected,
} from '../../redux/products/productsSlice';
import {
  getDate,
  getMeal,
  getMobileAddSelected,
} from '../../redux/products/productsSelectors';
import {
  CalendarWrap,
  CalendarTitle,
  Calendar,
  MealSelect,
} from '../../pages/DairyPage/DiaryPage.styled';
import { DiaryProductForm } from '../../components/index';
import { addProduct } from '../../redux/products/productsOperations';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { DATE_FORMAT } from '../../constants';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



export default function DiaryPageHeader() {
  const {t} = useTranslation();
  const options = [
    { value: 'breakfast', label: t('meal_option.breakfast') },
    { value: 'lunch', label: t('meal_option.lunch') },
    { value: 'dinner', label: t('meal_option.dinner') },
    { value: 'snack', label: t('meal_option.snack') },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const date = useSelector(getDate);
  const mobileAddSelected = useSelector(getMobileAddSelected);
  const meal = useSelector(getMeal);
  let [selectedProduct, setSelectedProduct] = useState(null);
  let [weight, setWeight] = useState('');
  const weightNumber = parseInt(weight);
  const submitDisabled = !meal || !selectedProduct || isNaN(weightNumber);
  const today = moment();
  const disableFutureDt = current => {
    return current.isBefore(today);
  };

  const closeDropdown = () => {
    setOpen(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  const formSubmitHandler = event => {
    event.preventDefault();
    if (submitDisabled) return;
    dispatch(
      addProduct({
        _id: selectedProduct.id,
        weight_g: weightNumber,
        meal: meal,
      })
    );
    setMobileAddSelected(false);
    reset();
  };

  const reset = () => {
    setSelectedProduct(null);
    setWeight('');
  };

  return (
    <Fragment>
      <CalendarWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
        <CalendarTitle>{date}</CalendarTitle>
        <div ref={ref}>
          <Calendar
            open={open}
            value={moment(date, DATE_FORMAT)}
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
              const newParams = new URLSearchParams(searchParams);
              newParams.set('date', momentObj.format(DATE_FORMAT));
              setSearchParams(newParams, {replace: true});
              setOpen(false);
            }}
          />
        </div>

        <MealSelect
          className={!mobileAddSelected ? '' : 'hideOnMobile'}
          classNamePrefix={'react-select'}
          isSearchable={false}
          options={options}
          required
          value={options.find(x => x.value === meal)}
          placeholder={t('meal_placeholder')}
          name="meal"
          onChange={option => {
            const newParams = new URLSearchParams(searchParams);
            newParams.set('meal', option.value);
            setSearchParams(newParams, {replace: true});
          }}
        />
      </CalendarWrap>
      <div>
        <DiaryProductForm
          submitDisabled={submitDisabled}
          weight={weight}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          setWeight={setWeight}
          formSubmitHandler={formSubmitHandler}
          className={mobileAddSelected ? '' : 'hideOnMobile'}
        />
      </div>
    </Fragment>
  );
}
