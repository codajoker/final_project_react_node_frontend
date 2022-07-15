import {
  UserInfoWrap,
  UserText,
  UserExit,
  VerticalLine,
} from './UserInfo.styled';
import { getUserName } from '../../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

export default function UserInfo() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <UserInfoWrap>
      <UserText>{name}</UserText>
      <VerticalLine />
      <UserExit onClick={() => dispatch(logOut())}>Вихід</UserExit>
    </UserInfoWrap>
  );
}
