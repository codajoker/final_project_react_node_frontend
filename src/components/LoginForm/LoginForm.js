import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from '../../redux/auth/authOperations';
import {
  Wrapper,
  Title,
  Form,
  Input,
  ButtonWrapper,
  AuthButton,
} from '../RegistrationForm/RegistrationForm.styled';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmailInputChanges = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordInputChanges = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <Title>Вхід</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Пошта"
          required
          id="email"
          label="Email"
          name="email"
          value={email}
          autoComplete="email"
          onChange={handleEmailInputChanges}
        />
        <Input
          placeholder="Пароль"
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          value={password}
          autoComplete="current-password"
          onChange={handlePasswordInputChanges}
        />
        <ButtonWrapper>
          <AuthButton type="submit">Вхід</AuthButton>
          <NavLink to={'/registration'}>
            <AuthButton type="submit">Зареєструватися</AuthButton>
          </NavLink>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
