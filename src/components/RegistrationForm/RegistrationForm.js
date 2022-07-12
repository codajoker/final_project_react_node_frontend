import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { register } from '../../redux/auth/authOperations';
import { getIsRegister } from '../../redux/auth/authSelectors';
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
} from './RegistrationForm.styled';

const validationSchema = yup.object({
  name: nameValidation,
  email: emailValidation,
  password: passwordValidation,
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const isRegister = useSelector(getIsRegister);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
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

        <Label htmlFor="password"></Label>
        <Input
          placeholder="Пароль *"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          autoComplete="current-password"
        />
        {formik.touched.password && Boolean(formik.errors.password) ? (
          <Text>{formik.touched.password && formik.errors.password}</Text>
        ) : (
          <Stub />
        )}

        <ButtonWrapper>
          <AuthButton type="submit">Зареєструватися</AuthButton>
          <LinkButton to={'/signin'}>Вхід</LinkButton>
          {isRegister && <Navigate to="/signin" />}
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
