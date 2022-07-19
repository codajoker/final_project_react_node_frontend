import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { register } from '../../redux/auth/authOperations';
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from '../../validators/authValidation';
import {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  ButtonWrapper,
  AuthButton,
  LinkButton,
  Text,
  Stub,
  ShowPasswIcon,
  HidePasswIcon,
} from './RegistrationForm.styled';

const validationSchema = yup.object({
  name: nameValidation,
  email: emailValidation,
  password: passwordValidation,
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassw, setShowPassw] = useState(false);
  const toggleShowPassw = () => {
    setShowPassw(!showPassw);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(register(values));
      navigate('/signin', { state: {from: "/calculator"},  replace: true });
      resetForm();
    },
  });

  return (
    <Wrapper>
      <Title>Реєстрація</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="name"></Label>
        <Input
          placeholder="Ім'я *"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          autoComplete="name"
        />
        {formik.touched.name && Boolean(formik.errors.name) ? (
          <Text>{formik.touched.name && formik.errors.name}</Text>
        ) : (
          <Stub />
        )}

        <Label htmlFor="email"></Label>
        <Input
          placeholder="Пошта *"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          autoComplete="email"
        />
        {formik.touched.email && Boolean(formik.errors.email) ? (
          <Text>{formik.touched.email && formik.errors.email}</Text>
        ) : (
          <Stub />
        )}

        <Label htmlFor="password" style={{ position: 'relative' }}>
          <Input
            placeholder="Пароль *"
            id="password"
            name="password"
            type={showPassw ? 'text' : 'password'}
            onChange={formik.handleChange}
            value={formik.values.password.trim()}
            autoComplete="current-password"
          />
          {showPassw ? (
            <HidePasswIcon
              onClick={() => {
                toggleShowPassw();
              }}
            />
          ) : (
            <ShowPasswIcon
              onClick={() => {
                toggleShowPassw();
              }}
            />
          )}
        </Label>
        {formik.touched.password && Boolean(formik.errors.password) ? (
          <Text>{formik.touched.password && formik.errors.password}</Text>
        ) : (
          <Stub />
        )}

        <ButtonWrapper>
          <AuthButton primary type="submit">
            Зареєструватися
          </AuthButton>
          <LinkButton to={'/signin'}>Вхід</LinkButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
