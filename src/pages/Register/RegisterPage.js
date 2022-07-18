import RegistrationForm from '../../components/RegistrationForm';
import { WrapperRegisterPage } from '../../components/RegistrationForm/RegistrationForm.styled';
import Header from '../../components/Header/Header';
import {
  BgBoxDesctop,
  BgBanana,
  BgStrawberry,
  BgLeaves,
  BgFigure,
  BgBoxTablet,
} from '../PreviewPage/PrewiewPage.styled';
import {
  BgBananaTablet,
  BgStrawberryTablet,
  BgLeavesTablet,
  BgFigureTablet,
} from '../Login/LoginPage.styled';

function RegisterPage() {
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

      <WrapperRegisterPage>
        <RegistrationForm />
      </WrapperRegisterPage>
    </>
  );
}

export default RegisterPage;
