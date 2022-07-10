import * as yup from 'yup';

const validationSchema = yup.object().shape({
  height: yup
    .number()
    .min(100, 'Ріст має бути від 100 см')
    .max(250, 'Ріст має бути до 250 см')
    .typeError('Ріст має бути числом')
    .required('Обовязкове поле'),
  age: yup
    .number()
    .min(18, 'Вік має бути від 18 лет')
    .max(100, 'Вік має бути до 100 лет')
    .typeError('Вік має бути числом')
    .required('Обовязкове поле'),
  currentWeight: yup
    .number()
    .min(20, 'Вага має бути від 20 кг')
    .max(500, 'Вага має бути до 500 кг')
    .typeError('Вага має бути числом')
    .required('Обовязкове поле'),
  desiredWeight: yup
    .number()
    .min(20, 'Вага має бути від 20 кг')
    .max(500, 'Вага має бути до 500 кг')
    .typeError('Вага має бути числом')
    .required('Обовязкове поле')
    .when('currentWeight', (currentWeight, schema) => {
      return schema.test({
        test: desiredWeight => !!currentWeight && desiredWeight < currentWeight,
        message: 'Бажана вага має бути меншою за поточний',
      });
    }),
  bloodType: yup.number().required('Обовязково'),
});

export default validationSchema;
