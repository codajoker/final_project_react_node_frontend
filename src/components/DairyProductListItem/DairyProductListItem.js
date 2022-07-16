import { GrClose, GrEdit } from 'react-icons/gr';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Product, ProductInfo, Calories, EditButton, FormEdit, FormInput, FormInputWeight, ButtonsWrap } from './DairyProductListItem.styled';
import { deleteProduct, changeProduct } from '../../redux/products/productsOperations';

export const DairyProductListItem = ({ product, date }) => {
  const dispatch = useDispatch();
  const { title, weight_g, calories_kcal, _id } = product;
  let [isEdditing, setIsEdditing] = useState(false);
  let [weight, setWeight] = useState(weight_g);

  console.log(changeProduct({date, product}));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEdditing(false);
    changeProduct({ date, product });
  }

  return (
    <Product>
      <ProductInfo>
        <div title={title}>{title}</div>
          {
            isEdditing ?
            <FormEdit onSubmit={handleSubmit}>
              <FormInput>
                <FormInputWeight
                  type="number"
                  min={1}
                  name="weight"
                  title="Введіть нову кількість вжитого продукту"
                  required
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  autoFocus
                  placeholder={weight}
                  // onBlur={() => setIsEdditing(false)}
                />
                <span>г</span>
              </FormInput>
              <ButtonsWrap>
                <EditButton
                  type="submit"
                  title="Зберегти"
                >
                  {window.innerWidth > 768 ?
                    <IoCheckmarkCircleOutline />
                    :
                    "Зберегти"
                  }
                </EditButton>
                <EditButton
                  type="button"
                  onClick={() => setIsEdditing(false)}
                  title="Відмінити"
                >
                  {window.innerWidth > 768 ?
                    <IoCloseCircleOutline />
                    :
                    "Відмінити"
                  }
                </EditButton>
              </ButtonsWrap>
            </FormEdit>
            : 
            null
          }
          <div>{weight_g} г</div>
          <EditButton
            type="button"
            onClick={() => setIsEdditing(!isEdditing)}
          >
            <GrEdit />
          </EditButton>
          <div>{calories_kcal} <Calories>кKал</Calories></div>
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
