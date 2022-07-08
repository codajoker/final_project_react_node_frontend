import * as yup from 'yup';

const validationSchema = yup.object().shape({
  height: yup
    .number()
    .min(110, 'Ріст має бути від 110 см')
    .max(300, 'Ріст має бути до 300 см')
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
    .required('Обовязкове поле'),
});

export default validationSchema;
