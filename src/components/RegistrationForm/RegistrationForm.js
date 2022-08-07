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
  isMediaMatch,
} from './RegistrationForm.styled';
import { useTranslation } from 'react-i18next';

const validationSchema = yup.object({
  name: nameValidation,
  email: emailValidation,
  password: passwordValidation,
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      navigate('/signin', { state: { from: '/calculator' }, replace: true });
      resetForm();
    },
  });

  return (
    <Wrapper>
      <Title>{t('auth_form.register_title')}</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="name"></Label>
        <Input
          placeholder={t('auth_form.placeholder.name')}
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          autoComplete="name"
        />
        {formik.touched.name && Boolean(formik.errors.name) ? (
          <Text>{formik.touched.name && t(formik.errors.name)}</Text>
        ) : (
          <Stub />
        )}

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
          <Text>{formik.touched.email && t(formik.errors.email)}</Text>
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
          <Text>{formik.touched.password && t(formik.errors.password)}</Text>
        ) : (
          <Stub />
        )}

        <ButtonWrapper>
          <AuthButton primary type="submit">
            {t('auth_form.register_submit_msg')}
          </AuthButton>
          <LinkButton to={'/signin'}>{t('auth_form.login_title')}</LinkButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
