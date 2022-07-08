
import { UserInfoContainer, UserInfoList, UserText,  UserExit } from "./UserInfo.styled";
import { ReactComponent as VerticalLine } from "../../images/desktop/VerticalLine.svg";

export const UserInfo = () => {
    return (
        <UserInfoContainer>
            <UserInfoList>
              <li><UserText>Nic</UserText></li> 
              <VerticalLine />
              <li><UserExit>Exit</UserExit></li> 
            </UserInfoList>
        </UserInfoContainer>
    );
}


