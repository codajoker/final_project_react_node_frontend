import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validationSchema from '../../validators/dailyCaloriesFormValidator';
import {
  MainPageContainer,
  FormWrapper,
  FormTitle,
  InputWrapper,
  Input,
  ErrorDescr,
  LabelRadioBoxes,
  LabelRadioInputs,
  RadioFieldWrapper,
  RadioField,
  SubmitButton,
  FormSelect,
} from './DailyCaloriesForm.styled';
import { dailyRateOperations } from '../../redux/dailyRate';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { useTranslation } from 'react-i18next';

export default function DailyCaloriesForm({ onOpen, getData }) {
  const bloodType = [1, 2, 3, 4];
  const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];
  const { t } = useTranslation();
  const initialValues = {
    height: '',
    sex: '',
    age: '',
    currentWeight: '',
    goalWeight: '',
    bloodType: '1',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleSubmit = (values, { resetForm }) => {
    try {
      if (isLoggedIn) {
        dispatch(dailyRateOperations.fetchDailyRateAuthorized(values));
        navigate('/diary');
      } else {
        getData(values);
        onOpen();
      }
    } catch (error) {
      toast.error('Помилка серверу, спробуйте пізніше!');
    } finally {
      resetForm();
    }
  };

  return (
    <MainPageContainer>
      <FormTitle>{t('calc-form.title')}</FormTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur
      >
        {({ errors, touched, isValid, dirty, setFieldTouched, setFieldValue }) => 
        (
  
          <Form>
            <FormWrapper>
              <InputWrapper>
                <Input
                  name="height"
                  placeholder={t('calc-form.placeholder.height')}
                />
                {touched.height && errors.height && (
                  <ErrorDescr>{errors.height}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
                <FormSelect
                  classNamePrefix={'react-select'}
                  options={options}
                  placeholder="Sex *"
                  name="sex"
                  onChange={(option) => {
                    setFieldTouched("sex", true);
                    setFieldValue("sex", option.value);
                    }}
                />
                {touched.sex && errors.sex && (
                  <ErrorDescr>{errors.sex}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
                <Input
                  id="age"
                  name="age"
                  placeholder={t('calc-form.placeholder.age')}
                />
                {touched.age && errors.age && (
                  <ErrorDescr>{errors.age}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
                <Input
                  id="currentWeight"
                  name="currentWeight"
                  placeholder={t('calc-form.placeholder.currentWeight')}
                />
                {touched.currentWeight && errors.currentWeight && (
                  <ErrorDescr>{errors.currentWeight}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
                <Input
                  id="goalWeight"
                  name="goalWeight"
                  placeholder={t('calc-form.placeholder.goalWeight')}
                />
                {touched.goalWeight && errors.goalWeight && (
                  <ErrorDescr>{errors.goalWeight}</ErrorDescr>
                )}
              </InputWrapper>
              <InputWrapper>
                <LabelRadioBoxes id="blood-group">
                  {t('calc-form.blood_group_msg')}
                </LabelRadioBoxes>
                <RadioFieldWrapper role="group" aria-labelledby="blood-group">
                  {bloodType.map((value, index) => (
                    <div key={index}>
                      <RadioField
                        key={index}
                        type="radio"
                        id={`bloodType${value}`}
                        name="bloodType"
                        value={value.toString()}
                      />
                      <LabelRadioInputs htmlFor={`bloodType${value}`}>
                        {value}
                      </LabelRadioInputs>
                    </div>
                  ))}
                </RadioFieldWrapper>
              </InputWrapper>
            </FormWrapper>
            <SubmitButton type="submit" disabled={!isValid || !dirty}>
              {t('calc-form.submbtn_msg')}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </MainPageContainer>
  );
}
