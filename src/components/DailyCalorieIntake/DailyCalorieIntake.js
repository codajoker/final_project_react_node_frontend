import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { translate } from '../../helpers/translate';
import { CalorieIntake, Head, DailyNorm, DailyNormValue, HeadProducts, ProductsList, EmptyProducts, ButtonStart } from './DailyCalorieIntake.slyled';
import { getCalories, getProducts } from '../../redux/dailyRate/dailyRateSelectors';

export default function DailyCalorieIntake() {
  const products = useSelector(getProducts) || [];
  const dailyCalories = useSelector(getCalories) || 0;

  return (
    <CalorieIntake>
        <Head>Ваша рекомендована добова норма споживання калорій становить</Head> 
        <DailyNorm><DailyNormValue>{dailyCalories}</DailyNormValue> кКал</DailyNorm>
        <HeadProducts>Не рекомендовано вживати</HeadProducts>
        {
          products.length > 0 ?
            <ProductsList>
                {
                    products.map((product, index) => {
                        return (
                            <li key={index}>{translate(product)}</li>
                        )
                    })
                }
            </ProductsList>
          :
          <EmptyProducts>Тут відображатиметься ваша дієта</EmptyProducts>
        }
        <NavLink to={'/registration'}>
          <ButtonStart primary>Почати худнути</ButtonStart>
        </NavLink>
    </CalorieIntake>
  );
}