import { useState, Fragment } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import {
  StyledForm,
  FormBtnMobile,
  FormBtn,
  FormLabel,
  FormInputProduct,
  FormInputWeight,
} from './DairyProductForm.styled';

export default function DiaryProductForm({ onSubmit }) {
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({
      product: product,
      weight: weight,
    });
    reset();
  };

  const reset = () => {
    setProduct('');
    setWeight('');
  };
  return (
    <Fragment>
      <StyledForm onSubmit={handleSubmit}>
        <FormLabel>
          <FormInputProduct
            type="text"
            name="product"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Введіть назву продукту"
            required
            value={product}
            onChange={e => setProduct(e.target.value)}
            placeholder="Введіть назву продукту"
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

        <FormBtn type="submit">
          <BsPlusLg size={14} />
        </FormBtn>
      </StyledForm>
    </Fragment>
  );
}
