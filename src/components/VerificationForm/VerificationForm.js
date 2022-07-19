import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { emailValidation } from '../../validators/authValidation';
import { resendVerifyUser } from '../../services/usersApi';
import { verificationSuccessToast } from '../../helpers/authToasts';
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
});

export default function Verify() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      resendVerifyUser(values);
      resetForm();
      verificationSuccessToast();
      navigate('/signin');
    },
  });

  return (
    <Wrapper className="auth-body mx-auto">
      <Title>Введіть свою електронну адресу</Title>

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

        <ButtonWrapper>
          <AuthButton primary type="submit">
            Надіслати
          </AuthButton>
          <LinkButton to="/signin">Назад до входу</LinkButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
