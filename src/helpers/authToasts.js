import { toast } from 'react-toastify';

export const registerSuccessToast = () =>
  toast.success('Вітаємо з успішною реєстрацією.');
export const alreadyHaveEmailToast = () =>
  toast.error('У нас вже є користувач із такою електронною адресою.');
export const successfulLoginToast = () =>
  toast.success('Ви успішно увійшли в обліковий запис.');
export const errorLoginToast = () =>
  toast.error('Електронна адреса або пароль неправильні.');
