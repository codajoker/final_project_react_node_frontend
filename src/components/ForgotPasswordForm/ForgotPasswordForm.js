import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { emailValidation } from '../../validators/authValidation';
import { userForgotPassword } from '../../services/usersApi';
import { forgottenPasswordToast } from '../../helpers/authToasts';
import {
  Wrapper,
  TitleFPF,
  Form,
  Label,
  Input,
  ButtonWrapper,
  AuthButton,
  LinkButton,
  Text,
  Stub,
  isMediaMatch,
} from '../RegistrationForm/RegistrationForm.styled';

const validationSchema = yup.object({
  email: emailValidation,
});

export default function ForgotPasswordForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      userForgotPassword(values);
      resetForm();
      forgottenPasswordToast();
      navigate('/signin');
    },
  });

  return (
    <Wrapper className="auth-body mx-auto">
      <div>
        <TitleFPF>Введіть свою електронну адресу</TitleFPF>
        <TitleFPF>для відновлення аккаунта</TitleFPF>
      </div>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="email"></Label>
        <Input
          placeholder="Пошта *"
          id="email"
          name="email"
          type={isMediaMatch()}
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
