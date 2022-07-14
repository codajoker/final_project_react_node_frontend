import { Fragment } from 'react';
import { useSelector } from 'react-redux';
// import { translate } from '../../helpers/translate';
import {
  Container,
  Head,
  CalloriesList,
  ProductsList,
  EmptyProducts,
} from './RightSidebar.styled';
import {
  getCalories,
  getProducts,
} from '../../redux/dailyRate/dailyRateSelectors';
import { getUserTotalCalories } from '../../redux/products/productsSelectors';

export default function RightSidebar({ date }) {
  const products = useSelector(getProducts) || [];
  const dailyNormCalories = useSelector(getCalories) || 0;
  const totalDayCalories = useSelector(getUserTotalCalories);
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

  return (
    <Container>
      <div>
        <Head>Всього за {date}</Head>
        <CalloriesList>
          <li>
            <span>Залишилось</span>
            <span>{dailyNormCalories === 0 ? 0 : leftCalories}</span>
          </li>
          <li>
            <span>Вжито</span>
            <span>{dailyNormCalories === 0 ? 0 : totalDayCalories} кКал</span>
          </li>
          <li>
            <span>Добова норма</span>
            <span>{dailyNormCalories} кКал</span>
          </li>
          <li>
            <span>n% від норми</span>
            <span>{norm_persent} %</span>
          </li>
        </CalloriesList>
      </div>
      <div>
        <Head>Не рекомендовано вживати</Head>
        {products.length > 0 ? (
          <ProductsList>
            {products.map((product, index) => {
              return (
                <Fragment key={index}>
                  {product}
                  {index !== products.length - 1 && ', '}
                </Fragment>
              );
            })}
          </ProductsList>
        ) : (
          <EmptyProducts>Тут відображатиметься ваша дієта</EmptyProducts>
        )}
      </div>
    </Container>
  );
}
