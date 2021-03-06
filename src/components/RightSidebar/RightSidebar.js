import moment from 'moment';
import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  useLocation } from 'react-router-dom';
import {Loader} from '../index';
import { translate } from '../../helpers/translate';
import product_dictionary from '../../data/product_dictionary';
import {
  Container,
  Head,
  CalloriesList,
  ProductsList,
  EmptyProducts,
  PersentCalories

} from './RightSidebar.styled';
import {
  getCalories,
  getProducts,
} from '../../redux/dailyRate/dailyRateSelectors';
import {
  getIsLoading,
  getProductsList,
} from '../../redux/products/productsSelectors';
import { caloriesToast } from '../../helpers/authToasts';

var currentDate = moment().format('DD.MM.yyyy');

export default function RightSidebar({ date = currentDate }) {
  const products = useSelector(getProducts) || [];
  const dailyNormCalories = useSelector(getCalories);
  const productsList = useSelector(getProductsList);
  const isLoading = useSelector(getIsLoading);
  const location = useLocation();

  const totalDayCalories = productsList.reduce(
    (total, x) => total + x.calories_kcal,
    0
  );
  let left = dailyNormCalories - totalDayCalories;
  let leftCalories =
    left < 0
      ? 'Ви вжили більше норми'
      : left === 0
      ? 'Ви вжили свою норму калорій'
      : `${left} кКал`;
  const norm_persent =
    dailyNormCalories > 0
      ? ((totalDayCalories * 100) / dailyNormCalories).toFixed(1)
      : 0;
  const numberPersent = Number(norm_persent);
  useEffect(() => {
    if (numberPersent > 100) {
    setTimeout(() => { caloriesToast() }, 1000);
  }
  }, [numberPersent])
  

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <Head>Всього за {date}</Head>
            {dailyNormCalories !== null ? (
              <CalloriesList>
                {location.pathname === '/calculator' ? (
                  <></>
                ) : (
                  <li>
                    <span>Залишилось</span>
                    <span>{dailyNormCalories === 0 ? 0 : leftCalories}</span>
                  </li>
                )}

                {location.pathname === '/calculator' ? (
                  <></>
                ) : (
                  <li>
                    <span>Вжито</span>
                    <span>
                      {dailyNormCalories === 0 ? 0 : totalDayCalories} кКал
                    </span>
                  </li>
                )}
                <li>
                  <span>Добова норма</span>
                  <span>{dailyNormCalories} кКал</span>
                </li>
                {location.pathname === '/calculator' ? (
                  <></>
                ) : (
                  <li>
                    <span>n% від норми</span>
                    {norm_persent > 100 ? <PersentCalories more>{norm_persent} %</PersentCalories> : <PersentCalories >{norm_persent} %</PersentCalories>}
                  </li>
                )}
              </CalloriesList>
            ) : (
              <Head> Необхідно ввести дані в <CalculatorLink to="/calculator"> форму </CalculatorLink>!</Head>
            )}
          </div>
          <div>
            <Head>Не рекомендовано вживати</Head>
            {products.length > 0 ? (
              <ProductsList>
                {products.map((product, index) => {
                  return (
                    <Fragment key={index}>
                      {translate(product_dictionary, product)}
                      {index !== products.length - 1 && ', '}
                    </Fragment>
                  );
                })}
              </ProductsList>
            ) : (
              <EmptyProducts>Тут відображатиметься ваша дієта</EmptyProducts>
            )}
          </div>
        </>
      )}
    </Container>
  );
}
