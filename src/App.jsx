import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Toast from './components/Toast';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { refreshUser } from './redux/auth/authOperations';
import {
  getIsRefreshing,
  getToken,
  getUserEmail,
} from './redux/auth/authSelectors';
import Loader from './components/Loader/Loader';
import './i18n';
import { useDarkMode } from './styles/themes/useDarkMode';
import { GlobalStyles } from './styles/themes/globalStyle';
import { darkTheme, lightTheme } from './styles/themes';
import { ToggleTheme } from './components/ToggleTheme/ToggleTheme';
import { ThemeProvider } from 'styled-components';

const PreviewPage = lazy(() => import('./pages/PreviewPage/PreviewPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const CalculatorPage = lazy(() =>
  import('./pages/CalculatorPage/CalculatorPage')
);
const DiaryPage = lazy(() => import('./pages/DairyPage/DiaryPage'));
const VerificationFormPage = lazy(() =>
  import('./pages/VerificationFormPage/VerificationFormPage')
);
const VerificationTokenPage = lazy(() =>
  import('./pages/VerificationTokenPage/VerificationTokenPage')
);
const ForgotPasswordFormPage = lazy(() =>
  import('./pages/ForgotPasswordFormPage/ForgotPasswordFormPage')
);
const ResetPasswordFormPage = lazy(() =>
  import('./pages/ResetPasswordFormPage/ResetPasswordFormPage')
);

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  const currentUserEmail = useSelector(getUserEmail);
  const token = useSelector(getToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch, currentUserEmail, token]);

  return (
    !isRefreshing && (
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ToggleTheme
          theme={theme}
          toggleTheme={toggleTheme}
          className={'theme-btn'}
        />

        <Suspense fallback={<Loader full />}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <PreviewPage />
                </PublicRoute>
              }
            />

            <Route
              path="/signin"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route
              path="/registration"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />

            <Route
              path="/verify/:verificationToken"
              element={
                <PublicRoute restricted>
                  <VerificationTokenPage />
                </PublicRoute>
              }
            />

            <Route
              path="/verify"
              element={
                <PublicRoute restricted>
                  <VerificationFormPage />
                </PublicRoute>
              }
            />

            <Route
              path="/forgot-password"
              element={
                <PublicRoute restricted>
                  <ForgotPasswordFormPage />
                </PublicRoute>
              }
            />

            <Route
              path="/reset-password/:id"
              element={
                <PublicRoute restricted>
                  <ResetPasswordFormPage />
                </PublicRoute>
              }
            />

            <Route
              path="/diary"
              element={
                <PrivateRoute>
                  <DiaryPage />
                </PrivateRoute>
              }
            />

            <Route
              path="/calculator"
              element={
                <PrivateRoute>
                  <CalculatorPage />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Toast />
      </ThemeProvider>
    )
  );
};

export default App;
