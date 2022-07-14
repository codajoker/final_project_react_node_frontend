import RegistrationForm from '../components/RegistrationForm';
import {
  WrapperRegisterPage,
  BackgroundImage,
} from '../components/RegistrationForm/RegistrationForm.styled';
import Header from '../components/Header/Header';

function RegisterPage() {
  return (
    <>
      <Header />
      <WrapperRegisterPage>
        <BackgroundImage alt="backgroundImage" />
        <RegistrationForm />
      </WrapperRegisterPage>
    </>
  );
}

export default RegisterPage;
