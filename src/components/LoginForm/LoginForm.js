import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/authOperations';
import {
  Wrapper,
  Title,
  Form,
  Input,
  ButtonWrapper,
  AuthButton,
  LinkButton,
} from '../RegistrationForm/RegistrationForm.styled';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

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

          <LinkButton to={'/registration'}>Зареєструватися </LinkButton>

          {isLoggedIn && <Navigate to="/diary" />}
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
