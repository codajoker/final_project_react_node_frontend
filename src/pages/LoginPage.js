import LoginForm from '../components/LoginForm';
import { WrapperLoginPage } from '../components/RegistrationForm/RegistrationForm.styled';
import Header from '../components/Header/Header';
import {
  BgBoxDesctop,
  BgBanana,
  BgStrawberry,
  BgLeaves,
  BgFigure,
  BgBoxTablet,
  BgBananaTablet,
  BgStrawberryTablet,
  BgLeavesTablet,
  BgFigureTablet,
} from './PreviewPage/PrewiewPage.styled';

function LoginPage() {
  return (
    <>
      <Header />
      <BgBoxTablet>
        <BgBananaTablet />
        <BgStrawberryTablet />
        <BgLeavesTablet />
        <BgFigureTablet />
      </BgBoxTablet>

      <BgBoxDesctop>
        <BgBanana />
        <BgStrawberry />
        <BgLeaves />
        <BgFigure />
      </BgBoxDesctop>
      <WrapperLoginPage>
        <LoginForm />
      </WrapperLoginPage>
    </>
  );
}

export default LoginPage;
