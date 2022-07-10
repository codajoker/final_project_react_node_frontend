import React from 'react';
import { HeaderDivider } from '../Header/Header.slyled';
import {  UserInfoList, UserText,   UserExit } from "./UserNic.styled";


const UserInfo = () => {
   
    return (
        
            <UserInfoList>
              <li><UserText>Імя</UserText></li> 
              <HeaderDivider />
              <li><UserExit>Вихід</UserExit></li> 
            </UserInfoList>
          );
}
