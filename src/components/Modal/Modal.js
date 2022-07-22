import {
  Content,
  ModalContainer,
  MobileBloc,
  ExitMobile,
  CloseBtn,
  ExitMobBtn,
  ExitMobBtnIcon,
  Overlay,
} from './Modal.styled';
import {Header, DailyCalorieIntake } from '../index';
import Portal from './Portal';

export default function Modal({ isOpen, onCancel, dailyRate }) {
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
                  <ExitMobBtn type="button" onClick={onCancel}>
                    <ExitMobBtnIcon />
                  </ExitMobBtn>
                </ExitMobile>
              </MobileBloc>
              <CloseBtn onClick={onCancel} fill="none" />
              <Content>
                <DailyCalorieIntake dailyRate={dailyRate} />
              </Content>
            </ModalContainer>
          </Overlay>
        </Portal>
      )}
    </>
  );
}
