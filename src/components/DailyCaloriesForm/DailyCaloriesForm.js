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
import { useEffect } from 'react';

export default function DailyCaloriesForm({ onOpen, getData }) {
  const { t } = useTranslation();
  const bloodType = [1, 2, 3, 4];
  const options = [
    { value: 'male', label: t("calc_form.placeholder.man") },
    { value: 'female', label: t("calc_form.placeholder.women") },
  ];
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
      toast.error(t('calc_form.toast_err_msg'));
    } finally {
      resetForm();
    }
  };

  useEffect(() => {}, [validationSchema]);

  return (
    <MainPageContainer>
      <FormTitle>{t('calc_form.title')}</FormTitle>

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
                  placeholder={t('calc_form.placeholder.height')}
                />
                {touched.height && errors.height && (
                  <ErrorDescr>{t(errors.height)}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
                <FormSelect
                  classNamePrefix={'react-select'}
                  isSearchable={false}
                  options={options}
                  placeholder={t("calc_form.placeholder.sex")}
                  name="sex"
                  onChange={(option) => {
                    setFieldTouched("sex", true);
                    setFieldValue("sex", option.value);
                    }}
                />
                {touched.sex && errors.sex && (
                  <ErrorDescr>{t(errors.sex)}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
                <Input
                  id="age"
                  name="age"
                  placeholder={t('calc_form.placeholder.age')}
                />
                {touched.age && errors.age && (
                  <ErrorDescr>{t(errors.age)}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
                <Input
                  id="currentWeight"
                  name="currentWeight"
                  placeholder={t('calc_form.placeholder.currentWeight')}
                />
                {touched.currentWeight && errors.currentWeight && (
                  <ErrorDescr>{t(errors.currentWeight)}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
                <Input
                  id="goalWeight"
                  name="goalWeight"
                  placeholder={t('calc_form.placeholder.goalWeight')}
                />
                {touched.goalWeight && errors.goalWeight && (
                  <ErrorDescr>{t(errors.goalWeight)}</ErrorDescr>
                )}
              </InputWrapper>
              <InputWrapper>
                <LabelRadioBoxes id="blood-group">
                  {t('calc_form.blood_group_msg')}
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
              {t('calc_form.submbtn_msg')}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </MainPageContainer>
  );
}
