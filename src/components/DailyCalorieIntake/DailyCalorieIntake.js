import { CalorieIntake, Head, DailyNorm, DailyNormValue, HeadProducts, ProductsList } from './DailyCalorieIntake.slyled';
import { Button } from '../../Button.styled';

export default function DailyCalorieIntake() {
  return (
    <CalorieIntake>
        <Head>Ваша рекомендована добова норма споживання калорій становить</Head> 
        <DailyNorm><DailyNormValue>2800</DailyNormValue> кКал</DailyNorm>
        <HeadProducts>Не рекомендовано вживати</HeadProducts>
        <ProductsList>
            <li>Вироби з борошна</li>
            <li>Молоко</li>
            <li>Червоне мясо</li>
            <li>Копченості</li>
            <li>Вироби з борошна</li>
            <li>Молоко</li>
            <li>Червоне мясо</li>
            <li>Копченості</li>
            <li>Вироби з борошна</li>
            <li>Молоко</li>
            <li>Червоне мясо</li>
            <li>Копченості</li>
        </ProductsList>
        <Button primary>Розпочати втрату ваги</Button>
    </CalorieIntake>
  );
}