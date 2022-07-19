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
} from './DailyCaloriesForm.styled';
import { dailyRateOperations } from '../../redux/dailyRate';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

export default function DailyCaloriesForm({ onOpen, getData }) {
  const bloodType = [1, 2, 3, 4];

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
                <Input id="age" name="age" placeholder="Вік *" />
                {touched.age && errors.age && (
                  <ErrorDescr>{errors.age}</ErrorDescr>
                )}
              </InputWrapper>

              <InputWrapper>
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
              Почати худнути
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </MainPageContainer>
  );
}
