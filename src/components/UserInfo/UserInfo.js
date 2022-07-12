import React from 'react';

import {
  UserInfoContainer,
  UserInfoList,
  UserText,
  UserExit,
} from './UserNic.styled';
import { ReactComponent as VerticalLine } from '../../images/desktop/VerticalLine.svg';

export default function UserInfo() {
  return (
    <UserInfoContainer>
      <UserInfoList>
        <li>
          <UserText>Nic</UserText>
        </li>

        <VerticalLine />

        <li>
          <UserExit>Exit</UserExit>
        </li>
      </UserInfoList>
    </UserInfoContainer>
  );
}
