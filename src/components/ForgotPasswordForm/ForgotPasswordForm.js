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
import { useTranslation } from 'react-i18next';

const validationSchema = yup.object({
  email: emailValidation,
});

export default function ForgotPasswordForm() {
  const { t } = useTranslation();
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
        <TitleFPF>{t("forgot_passw_form.title")}</TitleFPF>
        <TitleFPF>{t('forgot_passw_form.sec_text')}</TitleFPF>
      </div>
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
          <Text>{formik.touched.email && t(formik.errors.email)}</Text>
        ) : (
          <Stub />
        )}

        <ButtonWrapper>
          <AuthButton primary type="submit">
            {t('verify_form.sbm_btn')}
          </AuthButton>
          <LinkButton to="/signin">{t('verify_form.back_btn')}</LinkButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
