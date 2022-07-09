import closeIcon from '../../images/mobile/X.svg'; // change for react-icons close icon
import { Product, ProductInfo } from './DairyProductListItem.styled';
export const DairyProductListItem = ({product}) => {
    const { title, weight, calories } = product;
    return <Product>
        <ProductInfo>
            <div>{title.ua}</div>
            <div>{weight} г</div>
            <div>{calories} Ккал</div>
        </ProductInfo>
            
        <button type="button"><img src={closeIcon} alt='Close'/></button>
        </Product>
}