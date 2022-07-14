import { GrClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { Product, ProductInfo } from './DairyProductListItem.styled';
import { deleteProduct } from '../../redux/products/productsOperations';

export const DairyProductListItem = ({ product }) => {
  const dispatch = useDispatch();

  const { title, weight_g, calories_kcal } = product;
  return (
    <Product>
      <ProductInfo>
        <div>{title}</div>
        <div>{weight_g} г</div>
        <div>{calories_kcal} Ккал</div>
      </ProductInfo>
      <button type="button" onClick={() => dispatch(deleteProduct(product))}>
        <GrClose />
      </button>
    </Product>
  );
};