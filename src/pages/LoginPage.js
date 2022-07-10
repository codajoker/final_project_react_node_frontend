import LoginForm from '../components/LoginForm';
import { Container } from '../Container.styled';
import Header from '../components/Header/Header';

function LoginPage() {
  return (
    <>
      <Header />
      <Container>
        <LoginForm />
      </Container>
    </>
  );
}

export default LoginPage;
