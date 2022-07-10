import RegistrationForm from '../components/RegistrationForm';
import { Container } from '../Container.styled';
import Header from '../components/Header/Header';

function RegisterPage() {
  return (
    <>
      <Header />
      <Container>
        <RegistrationForm />
      </Container>
    </>
  );
}

export default RegisterPage;
