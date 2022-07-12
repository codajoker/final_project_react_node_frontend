import React from 'react';
import { HeaderDivider } from '../Header/Header.slyled';
import {  UserInfoList, UserText,   UserExit } from "./UserInfo.styled";
import { authOperations } from"../../redux/auth/authOperations";
import { useDispatch } from 'react-redux';
import { name } from '../../redux/auth/authSlice';
//import { Link, Navigate } from 'react-router-dom';



const UserInfo = () => {

const dispatch = useDispatch(); 

    return (
        <UserInfoList>
              <li><UserText>{name}І'мя</UserText></li> 
              <HeaderDivider />
              <li><UserExit onClick={() => dispatch(authOperations.logOut())}>Вихід</UserExit></li> 
            </UserInfoList>
          );
}

export default UserInfo;