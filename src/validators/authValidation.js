import * as yup from 'yup';
import i18next from '../i18n';

const REG_EXP = '^[A-Za-z0-9]+$';

export const nameValidation = yup
  .string(i18next.t('auth_form.valid_err_msg.name.type_err'))
  .min(3, i18next.t('auth_form.valid_err_msg.name.min'))
  .max(254, i18next.t('auth_form.valid_err_msg.max'))
  .required(i18next.t('auth_form.valid_err_msg.name.req'));

export const emailValidation = yup
  .string(i18next.t('auth_form.valid_err_msg.email.type_err'))
  .min(3, i18next.t('auth_form.valid_err_msg.email.min'))
  .max(254, i18next.t('auth_form.valid_err_msg.max'))
  .email(i18next.t('auth_form.valid_err_msg.email.symbol_err'))
  .required(i18next.t('auth_form.valid_err_msg.email.req'));

export const passwordValidation = yup
  .string(i18next.t('auth_form.valid_err_msg.password.type_err'))
  .matches(REG_EXP, i18next.t('auth_form.valid_err_msg.password.symbol_err'))
  .min(8, i18next.t('auth_form.valid_err_msg.password.min'))
  .max(100, i18next.t('auth_form.valid_err_msg.max'))
  .required(i18next.t('auth_form.valid_err_msg.password.req'));

export const confirmPasswordValidation = yup
  .string(i18next.t('auth_form.valid_err_msg.password.type_err'))
  .matches(REG_EXP, i18next.t('auth_form.valid_err_msg.password.symbol_err'))
  .min(8, i18next.t('auth_form.valid_err_msg.password.min'))
  .max(100, i18next.t('auth_form.valid_err_msg.max'))
  .required(i18next.t('auth_form.valid_err_msg.password.req'));
