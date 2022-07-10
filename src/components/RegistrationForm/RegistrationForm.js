import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import {
  Wrapper,
  Title,
  Form,
  Input,
  ButtonWrapper,
  AuthButton,
} from './RegistrationForm.styled';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleNameInputChanges = ({ target: { value } }) => {
    setName(value);
  };

  const handleEmailInputChanges = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordInputChanges = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <Title>Реєстрація</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Ім'я"
          required
          id="name"
          label="Name"
          name="name"
          value={name}
          autoComplete="name"
          onChange={handleNameInputChanges}
        />
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
          <NavLink to={'/signin'}>
            <AuthButton type="submit">Вхід</AuthButton>
          </NavLink>
          <AuthButton type="submit">Зареєструватися</AuthButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
