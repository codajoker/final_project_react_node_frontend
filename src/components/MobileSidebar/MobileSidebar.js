import UserInfo from '../UserInfo/UserInfo';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { MobileSidebarWrap, MobileSidebarBtn } from './MobileSidebar.styled';

export default function MobileSidebar({ onGoBack, mobileAddSelected }) {
  return (
    <MobileSidebarWrap>
      <MobileSidebarBtn onClick={() => onGoBack()}>
        <BsArrowReturnLeft
          size={12}
          className={!mobileAddSelected ? 'hideOnMobile' : ''}
        />
      </MobileSidebarBtn>
      <div>
        <UserInfo />
      </div>
    </MobileSidebarWrap>
  );
}
