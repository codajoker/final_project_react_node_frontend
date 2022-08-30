import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPlusLg } from 'react-icons/bs';
import { Container } from '../../styles/Container.styled';
import { useSearchParams } from 'react-router-dom';
import {
  ListWrap,
  AddBtnMobile,
  PageWrap,
  SidebarWrap,
} from './DiaryPage.styled';
import {
  DairyProductList,
  Header,
  MobileSidebar,
  Loader,
  RightSidebar,
  DiaryPageHeader,
} from '../../components/index';
import {
  getIsLoading,
  getProductsList,
  getDate,
  getMobileAddSelected,
  getMeal,
} from '../../redux/products/productsSelectors';

import {
  setDate,
  setMeal,
  setMobileAddSelected,
} from '../../redux/products/productsSlice';
import moment from 'moment';
import { getProductsListByDate } from '../../redux/products/productsOperations';
import { DATE_FORMAT, MEAL_OPTIONS } from '../../constants';

export default function DiaryPage() {
  const [searchParams] = useSearchParams();
  const date = useSelector(getDate);
  const meal = useSelector(getMeal);
  const mobileAddSelected = useSelector(getMobileAddSelected);
  const dispatch = useDispatch();

  const dateParamRaw = searchParams.get('date');
  const dateParam = (
    moment(dateParamRaw, DATE_FORMAT).isValid()
      ? moment(dateParamRaw, DATE_FORMAT)
      : moment()
  ).format(DATE_FORMAT);
  useEffect(() => {
    dispatch(setDate(dateParam));
    dispatch(getProductsListByDate());
  }, [dateParam]);

  const mealParamRaw = searchParams.get("meal");
  const mealParam = MEAL_OPTIONS.map(x => x.value).find(x => x=== mealParamRaw);
  useEffect(() => {
    if(!mealParam) return
    dispatch(setMeal(mealParam));
  }, [mealParam]);
  
  const isLoading = useSelector(getIsLoading);
  const productsList = useSelector(getProductsList);
  const filteredProducts = productsList.filter(product => product.meal === meal)
  if (date === null) return null;
  return (
    <>
      <Header />
      <PageWrap>
        <MobileSidebar onGoBack={() => dispatch(setMobileAddSelected(false))} />
        <Container>
          <DiaryPageHeader />
          <ListWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
            {isLoading ? (
              <Loader />
            ) : (
              <DairyProductList products={filteredProducts} />
            )}
          </ListWrap>
          {!mobileAddSelected && (
            <AddBtnMobile
              primary
              className={'showOnMobile'}
              onClick={() => dispatch(setMobileAddSelected(true))}
            >
              <BsPlusLg size={14} />
            </AddBtnMobile>
          )}
        </Container>
        <SidebarWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
          <RightSidebar />
        </SidebarWrap>
      </PageWrap>
    </>
  );
}
