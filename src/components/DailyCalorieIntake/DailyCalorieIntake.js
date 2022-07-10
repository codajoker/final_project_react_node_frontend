import { useSelector } from 'react-redux';
import { translate } from '../../helpers/translate';
import { CalorieIntake, Head, DailyNorm, DailyNormValue, HeadProducts, ProductsList, EmptyProducts } from './DailyCalorieIntake.slyled';
import { Button } from '../../Button.styled';

export default function DailyCalorieIntake() {
  const products = useSelector(state => state.products) || [];
  const normCalories = useSelector(state => state.calories) || 0;

  return (
    <CalorieIntake>
        <Head>Ваша рекомендована добова норма споживання калорій становить</Head> 
        <DailyNorm><DailyNormValue>{normCalories}</DailyNormValue> кКал</DailyNorm>
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
        <Button primary>Розпочати втрату ваги</Button>
    </CalorieIntake>
  );
}