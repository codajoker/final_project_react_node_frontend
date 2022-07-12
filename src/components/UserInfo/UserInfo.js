

import { UserInfoList, UserText,   UserExit, VerticalLine } from "./UserInfo.styled";
import { getUserName } from '../../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from "../../redux/auth/authOperations";



const UserInfo = () => {

  const name = useSelector(getUserName);
  
const dispatch = useDispatch(); 


   return (
        
        <UserInfoList>
              <li><UserText>{name}</UserText></li> 
              <li><VerticalLine /></li>
              
              <li><UserExit onClick={() => dispatch(logOut())}>Вихід</UserExit></li> 
              
            </UserInfoList>
   );        
}


export default UserInfo;