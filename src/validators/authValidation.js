import * as yup from 'yup';

const REG_EXP = '^[A-Za-z0-9]+$';

export const nameValidation = yup
  .string(('auth_form.valid_err_msg.name.type_err'))
  .min(3, ('auth_form.valid_err_msg.name.min'))
  .max(254, ('auth_form.valid_err_msg.max'))
  .required(('auth_form.valid_err_msg.name.req'));

export const emailValidation = yup
  .string(('auth_form.valid_err_msg.email.type_err'))
  .min(3, ('auth_form.valid_err_msg.email.min'))
  .max(254, ('auth_form.valid_err_msg.max'))
  .email(('auth_form.valid_err_msg.email.symbol_err'))
  .required(('auth_form.valid_err_msg.email.req'));

export const passwordValidation = yup
  .string(('auth_form.valid_err_msg.password.type_err'))
  .matches(REG_EXP, ('auth_form.valid_err_msg.password.symbol_err'))
  .min(8, ('auth_form.valid_err_msg.password.min'))
  .max(100, ('auth_form.valid_err_msg.max'))
  .required(('auth_form.valid_err_msg.password.req'));

export const confirmPasswordValidation = yup
  .string(('auth_form.valid_err_msg.password.type_err'))
  .matches(REG_EXP, ('auth_form.valid_err_msg.password.symbol_err'))
  .min(8, ('auth_form.valid_err_msg.password.min'))
  .max(100, ('auth_form.valid_err_msg.max'))
  .required(('auth_form.valid_err_msg.password.req'));
