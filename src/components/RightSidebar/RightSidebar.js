import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { translate } from '../../helpers/translate';
import { Container, Head, CalloriesList, ProductsList, EmptyProducts } from './RightSidebar.styled';

export default function RightSidebar() {

    const date = useSelector(state => state.date) || new Date().toLocaleString().split(',')[0];
    const products = useSelector(state => state.products) || [];
    const consumed = useSelector(state => state.consumed) || 0;
    const normCalories = useSelector(state => state.calories) || 0;
    const left = normCalories > 0 ? normCalories - consumed : 0;
    const norm_persent = normCalories > 0 ? (consumed * 100 / normCalories).toFixed(1) : 0;

  return (
    <Container>
        <div>
            <Head>Всього за {date}</Head>
            <CalloriesList>
                <li>
                    <span>Залишилось</span>
                    <span>
                        { left < 0 && "Ви вжили більше норми"}
                        { normCalories > 0 && left === 0 && "Ви вжили всю норму калорій"}
                        { left > 0 || normCalories === 0 && left === 0 && `${left} кКал`}
                    </span>
                </li>
                <li>
                    <span>Вжито</span>
                    <span>{consumed} кКал</span>
                </li>
                <li>
                    <span>Добова норма</span>
                    <span>{normCalories} кКал</span>
                </li>
                <li>
                    <span>n% від норми</span>
                    <span>{norm_persent} %</span>
                </li>
            </CalloriesList>
        </div>
        <div>
            <Head>Не рекомендовано вживати</Head>
            {
                products.length > 0 ? 
                <ProductsList>
                    {
                        products.map((product, index) => {
                            return (
                                <Fragment key={index}>{translate(product)}{index !== products.length-1 && ', '}</Fragment>
                            )
                        })
                    }
                </ProductsList>
                :
                <EmptyProducts>Тут відображатиметься ваша дієта</EmptyProducts>
            }
        </div>
    </Container>
  );
}