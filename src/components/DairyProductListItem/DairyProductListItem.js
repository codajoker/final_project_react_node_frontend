

import { GrClose } from 'react-icons/gr';
// import { SECONDARY_COLOR } from '../../variables/Variables';
import { Product, ProductInfo } from './DairyProductListItem.styled';
export const DairyProductListItem = ({product}) => {
    const { title, weight, calories } = product;
    return <Product>
        <ProductInfo>
            <div>{title.ua}</div>
            <div>{weight} г</div>
            <div>{calories} Ккал</div>
        </ProductInfo>
        <button type="button"><GrClose /></button>
        </Product>
}