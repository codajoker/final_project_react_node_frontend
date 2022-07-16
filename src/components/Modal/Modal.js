import {
  Content,
  ModalContainer,
  MobileBloc,
  ExitMobile,
  CloseBtn,
  ExitMobBtn,
  Overlay,
} from './Modal.styled';
import Header from '../Header/Header';
import Portal from './Portal';
import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';

const Modal = ({ isOpen, onCancel, dailyRate }) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <Overlay onClick={onCancel}>
            <ModalContainer
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <MobileBloc>
                <Header />
                <ExitMobile>
                  <button type="button" onClick={onCancel}>
                    <ExitMobBtn />
                  </button>
                </ExitMobile>
              </MobileBloc>
              <CloseBtn onClick={onCancel} />
              <Content>
                <DailyCalorieIntake dailyRate={dailyRate} />
              </Content>
            </ModalContainer>
          </Overlay>
        </Portal>
      )}
    </>
  );
};

export default Modal;
