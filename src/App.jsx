import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Toast from './components/Toast';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { refreshUser } from './redux/auth/authOperations';
import { getIsRefreshing, getToken, getUserEmail } from './redux/auth/authSelectors';
import Loader from './components/Loader/Loader';

import { useDarkMode } from './styles/themes/useDarkMode';
import { GlobalStyles } from './styles/themes/globalStyle';
import { darkTheme, lightTheme } from './styles/themes';
import { ToggleTheme } from './components/ToggleTheme/ToggleTheme';
import { ThemeProvider } from 'styled-components';
import { getIsLoggedIn } from './redux/auth/authSelectors';
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

const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const location = useLocation();
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  const currentUserEmail = useSelector(getUserEmail);
  
  const token = useSelector(getToken);
  

  useEffect(() => {
    if(token){
      dispatch(refreshUser());
    }
  }, [dispatch, currentUserEmail, token]);

  return (
    !isRefreshing && (
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {location.pathname !== "/verify" &&   <ToggleTheme
          theme={theme}
          toggleTheme={toggleTheme}
          className={
            isLoggedIn ? 'theme-mobile-loggedIn' : 'theme-mobile-not-loggedIn'
          }
        />}
       

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
