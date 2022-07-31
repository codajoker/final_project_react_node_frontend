import moment from 'moment';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { Modal } from '@mui/material';
import { Wrap, BtnWrap, ModalTxt, Btn } from '../UserInfo/UserInfo.styled';
import { useTranslation } from 'react-i18next';

export default function DairyProductListItem({ product, date }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { title, weight_g, calories_kcal, _id } = product;
  let [isEdditing, setIsEdditing] = useState(false);
  let [weight, setWeight] = useState(weight_g);
  const meal = { title, weight_g: weight, _id };

  const formatedDate = moment(date).format('DD.MM.yyyy');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeProduct({ date: formatedDate, meal }));
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
        <div title={title}>{title}</div>
        {isEdditing ? (
          <FormEdit onSubmit={handleSubmit}>
            <div>{title}</div>
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
              <span>г</span>
            </FormInput>
            <ButtonsWrap>
              <EditButton
                type="submit"
                title="Зберегти"
                disabled={weight === weight_g}
              >
                <IoCheckmarkCircleOutline />
                <span>Зберегти</span>
              </EditButton>
              <EditButton
                type="button"
                onClick={() => setIsEdditing(false)}
                title="Відмінити"
              >
                <IoCloseCircleOutline />
                <span>Відмінити</span>
              </EditButton>
            </ButtonsWrap>
          </FormEdit>
        ) : null}
        <div>{weight_g} г</div>
        <EditButton type="button" onClick={() => setIsEdditing(!isEdditing)}>
          <GrEdit />
        </EditButton>
        <div>
          {calories_kcal} <Calories>кKал</Calories>
        </div>
      </ProductInfo>
      <button type="button" onClick={handleOpen}>
        <GrClose />
      </button>
      <Modal open={open} onClose={handleClose}>
        <Wrap>
          <ModalTxt>{t('diary_product_delete_modal_msg')}</ModalTxt>
          <BtnWrap>
            <Btn
              onClick={() =>
                dispatch(deleteProduct({ date: formatedDate, _id }))
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
