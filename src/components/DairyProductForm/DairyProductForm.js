import { useState, Fragment } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import {
  StyledForm,
  FormBtnMobile,
  FormBtn,
  FormLabel,
  FormInputWeight,
  FormInputProduct,
} from './DairyProductForm.styled';
import { getProductByQuery } from '../../services/productsApi';

const loadOptions = async (inputValue, callback) => {
  const { products } = await getProductByQuery(inputValue);
  callback(
    products.map(product => {
      const title = product.title.ua;
      return { label: title, value: title };
    })
  );
};

export default function DiaryProductForm({ onSubmit, className }) {
  let [selectedProduct, setSelectedProduct] = useState(null);
  let [weight, setWeight] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const weightNumber = parseInt(weight);
    if (!selectedProduct || isNaN(weightNumber)) return;
    onSubmit({
      product: selectedProduct.value,
      weight: weightNumber,
    });
    reset();
  };

  const reset = () => {
    setSelectedProduct(null);
    setWeight('');
  };

  return (
    <Fragment>
      <StyledForm onSubmit={handleSubmit} className={className}>
        <FormLabel>
          <FormInputProduct
            classNamePrefix={'react-select'}
            value={selectedProduct}
            isClearable
            backspaceRemovesValue
            escapeClearsValue
            onChange={option => setSelectedProduct(option)}
            loadOptions={loadOptions}
            placeholder="Введіть назву продукту"
            noOptionsMessage={({ selectedProduct }) =>
              !selectedProduct
                ? 'Введіть назву продукту'
                : 'Такого продукту нема'
            }
            loadingMessage={({ selectedProduct }) =>
              !selectedProduct ? 'Шукаю...' : 'Такого продукту нема'
            }
          />
        </FormLabel>
        <FormLabel>
          <FormInputWeight
            type="number"
            min={1}
            name="weight"
            title="Введіть кількість вжитого продукту"
            required
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="Грами"
          />
        </FormLabel>
        <FormBtnMobile type="submit">Додати</FormBtnMobile>

        <FormBtn
          type="submit"
          disabled={selectedProduct === null || weight === '' ? true : false}
        >
          <BsPlusLg size={14} />
        </FormBtn>
      </StyledForm>
    </Fragment>
  );
}
