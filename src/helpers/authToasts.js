import { toast } from 'react-toastify';
import i18next from 'i18next';

const { t } = i18next;

export const registerSuccessToast = () =>
  toast.success(t('tostify_msgs.success_reg'));

export const alreadyHaveEmailToast = () =>
  toast.error(t('tostify_msgs.err_mail_reg'));

export const successfulLoginToast = () =>
  toast.success(t('tostify_msgs.success_login'));

export const errorLoginToast = () => toast.error(t('tostify_msgs.err_login'));

export const verificationSuccessToast = () =>
  toast.info(t('tostify_msgs.verify_mail'), { autoClose: false });

export const verifiedSuccessToast = () =>
  toast.success(t('tostify_msgs.success_verify_mail'));

export const caloriesToast = () =>
  toast.info(t('tostify_msgs.norm_up_info'), { autoClose: false });

export const forgottenPasswordToast = () =>
  toast.info(t('tostify_msgs.restore_acc'), {
    autoClose: false,
  });

export const resetPasswordSuccessToast = () =>
  toast.success(t('tostify_msgs.reset_pass_success'));
