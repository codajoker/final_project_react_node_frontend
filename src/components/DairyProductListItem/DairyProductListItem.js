import { GrClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { Product, ProductInfo } from './DairyProductListItem.styled';
import { deleteProduct } from '../../redux/products/productsOperations';

export const DairyProductListItem = ({ product, date }) => {
  const dispatch = useDispatch();

  const { title, weight_g, calories_kcal, _id } = product;
  return (
    <Product>
      <ProductInfo>
        <div title={title}>{title}</div>
        <div>{weight_g} г</div>
        <div>{calories_kcal} <span>кКал</span></div>
      </ProductInfo>
      <button
        type="button"
        onClick={() => dispatch(deleteProduct({ date, _id }))}
      >
        <GrClose />
      </button>
    </Product>
  );
};
