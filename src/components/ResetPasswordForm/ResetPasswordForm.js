import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import {
  passwordValidation,
  confirmPasswordValidation,
} from '../../validators/authValidation';
import { userResetPassword } from '../../services/usersApi';
import { resetPasswordSuccessToast } from '../../helpers/authToasts';
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
} from '../RegistrationForm/RegistrationForm.styled';

const validationSchema = yup.object({
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
});

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();
  const [showPassw, setShowPassw] = useState(false);
  const toggleShowPassw = () => {
    setShowPassw(!showPassw);
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (values.password === values.confirmPassword) {
        userResetPassword(id, values);
        resetForm();
        resetPasswordSuccessToast();
        navigate('/signin');
      }
    },
  });

  return (
    <Wrapper className="auth-body mx-auto">
      <Title>Введіть новий пароль</Title>

      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="password" style={{ position: 'relative' }}>
          <Input
            placeholder={t('auth_form.placeholder.password')}
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

        <Label htmlFor="confirmPassword" style={{ position: 'relative' }}>
          <Input
            placeholder={'Підтвердження пароля *'}
            id="confirmPassword"
            name="confirmPassword"
            type={showPassw ? 'text' : 'password'}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword.trim()}
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
        {formik.touched.confirmPassword &&
        Boolean(formik.errors.confirmPassword) ? (
          <Text>
            {formik.touched.confirmPassword && formik.errors.confirmPassword}
          </Text>
        ) : (
          <Stub />
        )}

        <ButtonWrapper>
          <AuthButton
            disabled={formik.values.password !== formik.values.confirmPassword}
            primary
            type="submit"
          >
            Надіслати
          </AuthButton>
          <LinkButton to="/signin">Назад до входу</LinkButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
