import i18next from 'i18next';
import { useState } from 'react';
import { Modal } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { GrClose, GrEdit } from 'react-icons/gr';
import { useDetectClickOutside } from 'react-detect-click-outside';
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from 'react-icons/io5';
import {
  Product,
  ProductInfo,
  Calories,
  EditButton,
  FormEdit,
  FormInput,
  FormInputWeight,
  ButtonsWrap,
} from './DairyProductListItem.styled';
import {
  deleteProduct,
  changeProduct,
} from '../../redux/products/productsOperations';
import { Wrap, BtnWrap, ModalTxt, Btn } from '../UserInfo/UserInfo.styled';

export default function DairyProductListItem({ product }) {
  const lang = i18next.language === "uk" ? "ua" : i18next.language;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { title, weight_g, calories_kcal, _id, meal} = product;
  let [isEdditing, setIsEdditing] = useState(false);
  let [weight, setWeight] = useState(weight_g);
  const changedProduct = { title, weight_g: weight, _id , meal};
  

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeProduct({ product: changedProduct }));
    setIsEdditing(false);
  };

  const closeEditting = () => {
    setIsEdditing(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeEditting });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Product ref={ref}>
      <ProductInfo>
        <div title={title[lang]}>{title[lang]}</div>
        {isEdditing ? (
          <FormEdit onSubmit={handleSubmit}>
            <div>{title[lang]}</div>
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
              />
              <span>{t('diary_form.grams')}</span>
            </FormInput>
            <ButtonsWrap>
              <EditButton
                type="submit"
                title="Зберегти"
                disabled={weight === weight_g}
              >
                <IoCheckmarkCircleOutline />
                <span>{t('diary_form.save')}</span>
              </EditButton>
              <EditButton
                type="button"
                onClick={() => setIsEdditing(false)}
                title="Відмінити"
              >
                <IoCloseCircleOutline />
                <span>{t('diary_form.close')}</span>
              </EditButton>
            </ButtonsWrap>
          </FormEdit>
        ) : null}
        <div>{weight_g} г</div>
        <EditButton type="button" onClick={() => setIsEdditing(!isEdditing)}>
          <GrEdit />
        </EditButton>
        <div>
          {Math.round(calories_kcal)} <Calories>{t("calories")}</Calories>
        </div>
      </ProductInfo>
      <button type="button" onClick={handleOpen}>
        <GrClose />
      </button>
      <Modal open={open} onClose={handleClose}>
        <Wrap>
          <ModalTxt>{t('diary_form.remove_prod_msg')}</ModalTxt>
          <BtnWrap>
            <Btn
              onClick={() =>
                dispatch(deleteProduct({ _id , meal}))
              }
            >
              {t('modal.logout_yes_btn')}
            </Btn>
            <Btn onClick={handleClose}>{t('modal.logout_no_btn')}</Btn>
          </BtnWrap>
        </Wrap>
      </Modal>
    </Product>
  );
}
