import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { logIn } from '../../redux/auth/authOperations';
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
  ShowPasswIcon,
  HidePasswIcon,
  RedirectLink,
  isMediaMatch,
} from '../RegistrationForm/RegistrationForm.styled';

const validationSchema = yup.object({
  email: emailValidation,
  password: passwordValidation,
});

export default function LoginForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showPassw, setShowPassw] = useState(false);
  const toggleShowPassw = () => {
    setShowPassw(!showPassw);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(logIn(values));
      resetForm();
    },
  });

  return (
    <Wrapper>
      <Title>{t('auth_form.login_title')}</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="email"></Label>
        <Input
          placeholder={t('auth_form.placeholder.email')}
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
        <RedirectLink to="/verify">{t('auth_form.verify_msg')}</RedirectLink>
        <RedirectLink to="/forgot-password">
          {t('auth_form.forgot_pass_msg')}
        </RedirectLink>

        <ButtonWrapper>
          <AuthButton primary type="submit">
            {t('auth_form.login_title')}
          </AuthButton>
          <LinkButton to={'/registration'}>
            {t('auth_form.register_submit_msg')}
          </LinkButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
