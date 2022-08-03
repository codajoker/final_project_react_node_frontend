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
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const loadOptions = async (inputValue, callback) => {
  const { products } = await getProductByQuery(inputValue);
  callback(
    products.map(product => {
      const title =
        i18next.language === 'en' ? product.title.en : product.title.ua;
      return { label: title, value: title };
    })
  );
};

export default function DiaryProductForm({ onSubmit, className }) {
  const { t } = useTranslation();
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
            placeholder={t('diary_form.placeholder.products')}
            noOptionsMessage={({ inputValue }) =>
              inputValue
                ? t('diary_form.option_no_prod_msg')
                : t('diary_form.placeholder.products')
            }
            loadingMessage={() => t('diary_form.option_loading_msg')}
          />
        </FormLabel>
        <FormLabel>
          <FormInputWeight
            type="number"
            min={1}
            name="weight"
            title={t('diary_form.weight_input_title')}
            required
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder={t('diary_form.placeholder.weight')}
          />
        </FormLabel>
        <FormBtnMobile
          type="submit"
          primary
          disabled={selectedProduct === null || weight === '' ? true : false}
        >
          {t('diary_form.subm_btn_msg')}
        </FormBtnMobile>

        <FormBtn
          type="submit"
          primary
          disabled={selectedProduct === null || weight === '' ? true : false}
        >
          <BsPlusLg size={14} />
        </FormBtn>
      </StyledForm>
    </Fragment>
  );
}
