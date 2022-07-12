import React  from 'react';
import { HeaderDivider } from '../Header/Header.slyled';
import {  UserInfoList, UserText,   UserExit } from "./UserInfo.styled";
import { authOperations } from"../../redux/auth/authOperations";
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from "../../redux/auth/authOperations";
import { NavLink } from 'react-router-dom';



const UserInfo = () => {

  const name = useSelector(state => state.auth.user.name);
  const logout = useSelector(state => state.logOut);
const dispatch = useDispatch(); 


   return (
        <UserInfoList>
              <li><UserText>{name}І'мя</UserText></li> 
              <HeaderDivider />
              <NavLink to={'/'}>
              <li><UserExit onClick={() => dispatch(authOperations.logOut())}>Вихід</UserExit></li> 
              </NavLink>
            </UserInfoList>
          );
}

export default UserInfo;