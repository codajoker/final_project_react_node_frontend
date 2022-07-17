import * as yup from 'yup';

const validationSchema = yup.object().shape({
  height: yup
    .number()
    .min(100, 'Зріст має бути від 100 см')
    .max(250, 'Зріст має бути до 250 см')
    .typeError('Зріст має бути числом')
    .required(`Обов'язкове поле`),
  age: yup
    .number()
    .min(18, 'Вік має бути від 18 років')
    .max(100, 'Вік має бути до 100 років')
    .typeError('Вік має бути числом')
    .required(`Обов'язкове поле`),
  currentWeight: yup
    .number()
    .min(20, 'Вага має бути від 20 кг')
    .max(500, 'Вага має бути до 500 кг')
    .typeError('Вага має бути числом')
    .required(`Обов'язкове поле`),
  goalWeight: yup
    .number()
    .min(20, 'Вага має бути від 20 кг')
    .max(500, 'Вага має бути до 500 кг')
    .typeError('Вага має бути числом')
    .required(`Обов'язкове поле`)
    .when('currentWeight', (currentWeight, schema) => {
      return schema.test({
        test: goalWeight => !!currentWeight && goalWeight < currentWeight,
        message: 'Бажана вага має бути меншою за поточний',
      });
    }),
  bloodType: yup.number().required(`Обов'язково`),
});

export default validationSchema;
