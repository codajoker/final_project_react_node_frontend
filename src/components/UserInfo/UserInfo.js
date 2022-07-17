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
  Btn
} from './UserInfo.styled';
import { getUserName } from '../../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

export default function UserInfo() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  let sliced = name.slice(0,15);
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
      <UserExit onClick={handleOpen}>Вихід</UserExit>
      <Modal
        open={open}
        onClose={handleClose}>
        <Wrap>
          <ModalTxt>Бажаєте вийти?</ModalTxt>
          <BtnWrap>
          <Btn primary onClick={() => dispatch(logOut())}>Так</Btn>
          <Btn onClick={handleClose}>Ні</Btn>
          </BtnWrap>
        </Wrap>
      </Modal>
    </UserInfoWrap>
  );
}
