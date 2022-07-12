import React from 'react';
import { Formik, Form } from 'formik';
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
  RadioField,
  SubmitButton,
} from './DailyCaloriesForm.styled';
import { dailyRateOperations } from '../../redux/dailyRate';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const DailyCaloriesForm = ({ onOpen, getData }) => {
  const initialValues = {
    height: '',
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
      <FormTitle>Порахуй свою денну норму калорій прямо зараз</FormTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <FormWrapper>
              <InputWrapper>
                <Input name="height" placeholder="Зріст *" />
                {touched.height && errors.height && (
                  <ErrorDescr>{errors.height}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="age"></label>
                <Input id="age" name="age" placeholder="Вік *" />
                {touched.age && errors.age && (
                  <ErrorDescr>{errors.age}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="currentWeight"></label>
                <Input
                  id="currentWeight"
                  name="currentWeight"
                  placeholder="Поточна вага *"
                />
                {touched.currentWeight && errors.currentWeight && (
                  <ErrorDescr>{errors.currentWeight}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="goalWeight"></label>
                <Input
                  id="goalWeight"
                  name="goalWeight"
                  placeholder="Бажана вага *"
                />
                {touched.goalWeight && errors.goalWeight && (
                  <ErrorDescr>{errors.goalWeight}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
                <LabelRadioBoxes id="blood-group">
                  Група крові *
                </LabelRadioBoxes>
                <div role="group" aria-labelledby="blood-group">
                  <RadioField
                    type="radio"
                    id="bloodType1"
                    name="bloodType"
                    value="1"
                    checked
                  />
                  <LabelRadioInputs htmlFor="bloodType1">1</LabelRadioInputs>

                  <RadioField
                    type="radio"
                    id="bloodType2"
                    name="bloodType"
                    value="2"
                  />
                  <LabelRadioInputs htmlFor="bloodType2">2</LabelRadioInputs>

                  <RadioField
                    type="radio"
                    id="bloodType3"
                    name="bloodType"
                    value="3"
                  />
                  <LabelRadioInputs htmlFor="bloodType3">3</LabelRadioInputs>

                  <RadioField
                    type="radio"
                    id="bloodType4"
                    name="bloodType"
                    value="4"
                  />
                  <LabelRadioInputs htmlFor="bloodType4">4</LabelRadioInputs>
                </div>
              </InputWrapper>
            </FormWrapper>
            <SubmitButton type="submit" disabled={!isValid && !dirty}>
              Почати худнути
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </MainPageContainer>
  );
};

export default DailyCaloriesForm;
