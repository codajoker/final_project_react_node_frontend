import * as yup from 'yup';

const validationSchema = yup.object().shape({
  height: yup
    .number()
    .min(100, ('calc_form.valid_err_msg.height.min'))
    .max(250, ('calc_form.valid_err_msg.height.max'))
    .typeError(('calc_form.valid_err_msg.height.type_err'))
    .required(('calc_form.valid_err_msg.required')),
  age: yup
    .number()
    .min(18, ('calc_form.valid_err_msg.age.min'))
    .max(100, ('calc_form.valid_err_msg.age.max'))
    .typeError(('calc_form.valid_err_msg.age.type_err'))
    .required(('calc_form.valid_err_msg.required')),
  currentWeight: yup
    .number()
    .min(20, ('calc_form.valid_err_msg.weight.min'))
    .max(500, ('calc_form.valid_err_msg.weight.max'))
    .typeError(('calc_form.valid_err_msg.weight.type_err'))
    .required(('calc_form.valid_err_msg.required')),
  goalWeight: yup
    .number()
    .min(20, ('calc_form.valid_err_msg.weight.min'))
    .max(500, ('calc_form.valid_err_msg.weight.max'))
    .typeError(('calc_form.valid_err_msg.weight.type_err'))
    .required(('calc_form.valid_err_msg.required'))
    .when('currentWeight', (currentWeight, schema) => {
      return schema.test({
        test: goalWeight => !!currentWeight && goalWeight < currentWeight,
        message: ('calc_form.valid_err_msg.weight.quant_err'),
      });
    }),
  bloodType: yup.number().required(('necessarily')),
});

export default validationSchema;
