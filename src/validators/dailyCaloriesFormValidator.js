import * as yup from 'yup';
import i18n from '../i18n';

const validationSchema = yup.object().shape({
  height: yup
    .number()
    .min(100, i18n.t('calc_form.valid_err_msg.height.min'))
    .max(250, i18n.t('calc_form.valid_err_msg.height.max'))
    .typeError(i18n.t('calc_form.valid_err_msg.height.type_err'))
    .required(i18n.t('calc_form.valid_err_msg.required')),
  age: yup
    .number()
    .min(18, i18n.t('calc_form.valid_err_msg.age.min'))
    .max(100, i18n.t('calc_form.valid_err_msg.age.max'))
    .typeError(i18n.t('calc_form.valid_err_msg.age.type_err'))
    .required(i18n.t('calc_form.valid_err_msg.required')),
  currentWeight: yup
    .number()
    .min(20, i18n.t('calc_form.valid_err_msg.weight.min'))
    .max(500, i18n.t('calc_form.valid_err_msg.weight.max'))
    .typeError(i18n.t('calc_form.valid_err_msg.weight.type_err'))
    .required(i18n.t('calc_form.valid_err_msg.required')),
  goalWeight: yup
    .number()
    .min(20, i18n.t('calc_form.valid_err_msg.weight.min'))
    .max(500, i18n.t('calc_form.valid_err_msg.weight.max'))
    .typeError(i18n.t('calc_form.valid_err_msg.weight.type_err'))
    .required(i18n.t('calc_form.valid_err_msg.required'))
    .when('currentWeight', (currentWeight, schema) => {
      return schema.test({
        test: goalWeight => !!currentWeight && goalWeight < currentWeight,
        message: i18n.t('calc_form.valid_err_msg.weight.quant_err'),
      });
    }),
  bloodType: yup.number().required(i18n.t('necessarily')),
});

export default validationSchema;
