import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { translate } from '../../helpers/translate';
import product_dictionary from '../../product_dictionary';
import { Container, Head, CalloriesList, ProductsList, EmptyProducts } from './RightSidebar.styled';
import { getCalories, getProducts } from '../../redux/dailyRate/dailyRateSelectors';

export default function RightSidebar({date = new Date().toLocaleString().split(',')[0]}) {

    const products = useSelector(getProducts) || [];
    const consumed = useSelector(state => state.consumed) || 0;
    const dailyCalories = useSelector(getCalories) || 0;
    const left = dailyCalories > 0 ? dailyCalories - consumed : 0;
    const norm_persent = dailyCalories > 0 ? (consumed * 100 / dailyCalories).toFixed(1) : 0;

    return (
        <Container>
            <div>
                <Head>Всього за {date}</Head>
                <CalloriesList>
                    <li>
                        <span>Залишилось</span>
                        <span>
                            { left < 0 && "Ви вжили більше норми"}
                            { dailyCalories > 0 && left === 0 && "Ви вжили свою норму калорій"}
                            { dailyCalories === 0 || left > 0 && `${left} кКал`}
                        </span>
                    </li>
                    <li>
                        <span>Вжито</span>
                        <span>{consumed} кКал</span>
                    </li>
                    <li>
                        <span>Добова норма</span>
                        <span>{dailyCalories} кКал</span>
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
                                    <Fragment key={index}>{translate(product_dictionary, product)}{index !== products.length-1 && ', '}</Fragment>
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