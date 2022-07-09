import { Container, Head, CalloriesList, ProductsList, EmptyProducts } from './RightSidebar.styled';

export default function RightSidebar() {
  const products = ["Молоко", "Копченості", "Вироби з борошна", "Червоне мясо"];
  return (
    <Container>
        <div>
            <Head>Підсумки за 06/20/2020</Head>
            <CalloriesList>
                <li>
                    <span>Залишилось</span>
                    <span>000 кКал</span>
                </li>
                <li>
                    <span>Вжито</span>
                    <span>000 кКал</span>
                </li>
                <li>
                    <span>Добова норма</span>
                    <span>000 кКал</span>
                </li>
                <li>
                    <span>n% від норми</span>
                    <span>000 кКал</span>
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
                                <span key={index}>{product.toLowerCase()}</span>
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