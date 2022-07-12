// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { translate } from '../../helpers/translate';
import {
  CalorieIntake,
  Head,
  DailyNorm,
  DailyNormValue,
  HeadProducts,
  ProductsList,
  EmptyProducts,
  ButtonStart,
} from './DailyCalorieIntake.slyled';

export default function DailyCalorieIntake({ dailyRate }) {
  const products = dailyRate.uniqCategories;
  const dailyCalories = dailyRate.dailyCalories;

  return (
    <CalorieIntake>
      <Head>Ваша рекомендована добова норма споживання калорій становить</Head>
      <DailyNorm>
        <DailyNormValue>{dailyCalories}</DailyNormValue> кКал
      </DailyNorm>
      <HeadProducts>Не рекомендовано вживати</HeadProducts>
      {products.length > 0 ? (
        <ProductsList>
          {products.map((product, index) => {
            return <li key={index}>{product}</li>;
          })}
        </ProductsList>
      ) : (
        <EmptyProducts>Тут відображатиметься ваша дієта</EmptyProducts>
      )}
      <NavLink to={'/registration'}>
        <ButtonStart primary>Почати худнути</ButtonStart>
      </NavLink>
    </CalorieIntake>
  );
}
