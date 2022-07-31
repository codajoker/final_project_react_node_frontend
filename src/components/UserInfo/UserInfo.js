import { useState } from 'react';
import { Modal } from '@mui/material';
import {
  UserInfoWrap,
  UserText,
  UserExit,
  VerticalLine,
  Wrap,
  BtnWrap,
  ModalTxt,
  Btn,
} from './UserInfo.styled';
import { getUserName } from '../../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default function UserInfo() {
  const { t } = useTranslation();
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  let sliced = name.slice(0, 18);
  if (sliced.length < name.length) {
    sliced += '...';
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <UserInfoWrap>
      <UserText>{sliced}</UserText>
      <VerticalLine />
      <UserExit onClick={handleOpen}>{t('logout')}</UserExit>
      <LanguageSwitcher />
      <Modal open={open} onClose={handleClose}>
        <Wrap>
          <ModalTxt>{t('modal.logout_msg')}</ModalTxt>
          <BtnWrap>
            <Btn onClick={() => dispatch(logOut())}>
              {t('modal.logout_yes_btn')}
            </Btn>
            <Btn onClick={handleClose}>{t('modal.logout_no_btn')}</Btn>
          </BtnWrap>
        </Wrap>
      </Modal>
    </UserInfoWrap>
  );
}
