import { toast } from 'react-toastify';

export const registerSuccessToast = () =>
  toast.success('Вітаємо з успішною реєстрацією.');

export const alreadyHaveEmailToast = () =>
  toast.error('У нас вже є користувач із такою електронною адресою.');

export const successfulLoginToast = () =>
  toast.success('Ви успішно увійшли в обліковий запис.');

export const errorLoginToast = () =>
  toast.error('Електронна адреса або пароль неправильні.');

export const verificationSuccessToast = () =>
  toast.info('Перейдіть на пошту, щоб підтвердити її.', { autoClose: false });

export const verifiedSuccessToast = () =>
  toast.success('Вітаємо з успішною веріфікацією.');

export const caloriesToast = () =>
  toast.info('Ви перевищили денну норму калорій!', { autoClose: false });

export const forgottenPasswordToast = () =>
  toast.info('Перейдіть на пошту, щоб відновити аккаунт.', {
    autoClose: false,
  });

export const resetPasswordSuccessToast = () =>
  toast.success('Ваш пароль успішно змінено.');
