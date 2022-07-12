import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { logIn } from '../../redux/auth/authOperations';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { getCalories } from '../../redux/dailyRate/dailyRateSelectors';
import {
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
} from '../RegistrationForm/RegistrationForm.styled';

const validationSchema = yup.object({
  email: emailValidation,
  password: passwordValidation,
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isCalories = useSelector(getCalories);
  const navigate = useNavigate();

  const isHasCalories = () => {
    if (isCalories) {
      navigate('/dairy');
    }
  };
  // else {navigate('/calculator');}

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(logIn(values));
      isHasCalories();
      resetForm();
    },
  });

  return (
    <Wrapper>
      <Title>Вхід</Title>
      <Form onSubmit={formik.handleSubmit}>
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
          <AuthButton type="submit">Вхід</AuthButton>
          <LinkButton to={'/registration'}>Зареєструватися </LinkButton>
          {isLoggedIn && <Navigate to="/calculator" />}
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
