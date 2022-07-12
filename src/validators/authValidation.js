import * as yup from 'yup';

export const nameValidation = yup
  .string(`Введіть своє ім'я`)
  .min(3, 'Довжина імені має бути мінімум 3 символи')
  .max(33, 'Надто довго!')
  .required(`Необхідно вказати ім'я`);

export const emailValidation = yup
  .string('Введіть адресу електронної пошти')
  .email('Введіть дійсну електронну адресу')
  .required('Необхідно вказати адресу електронної пошти');

export const passwordValidation = yup
  .string('Введіть ваш пароль')
  .min(8, 'Довжина пароля повинна бути мінімум 8 символів')
  .required('Необхідно ввести пароль');
