import LoginForm from '../components/LoginForm';
import {
  WrapperLoginPage,
  BackgroundImage,
} from '../components/RegistrationForm/RegistrationForm.styled';
import Header from '../components/Header/Header';

function LoginPage() {
  return (
    <>
      <Header />
      <WrapperLoginPage>
        <BackgroundImage alt="backgroundImage" />
        <LoginForm />
      </WrapperLoginPage>
    </>
  );
}

export default LoginPage;
