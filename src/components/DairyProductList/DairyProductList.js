
import { DairyProductListItem } from '../DairyProductListItem/DairyProductListItem';
import { ProductsList, ProductsListThumb } from './DairyProductList.styled';
export const DairyProductList = ({ products }) => {
  // якщо продуктів більше шести з'являється скрол
  // useSelector для isLoading
  // useEffect який при виборі дати буде з беку брати список продуктів на вибране число в іншому випадку буде підгружати продукти на поточну дату
  return (
    <>
          {/* {isLoading && "...підставити компонент лоадер"} */}
      {products.length !== 0 && <ProductsListThumb>
        <ProductsList>
          {products.map(product => (
            <DairyProductListItem key={product._id} product={product} />
          ))}
        </ProductsList>
      </ProductsListThumb>}
      
    </>
  );
};