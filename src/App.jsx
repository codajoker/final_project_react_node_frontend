import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Toast from './components/Toast';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { refreshUser } from './redux/auth/authOperations';
import { getIsRefreshing, getUserEmail } from './redux/auth/authSelectors';
import Loader from './components/Loader/Loader';

import { useDarkMode } from './themes/useDarkMode';
import { GlobalStyles } from './themes/globalStyle';
import { darkTheme, lightTheme } from './themes';
import { ToggleTheme } from './components/ToggleTheme/ToggleTheme';
import { ThemeProvider } from 'styled-components';
import { getIsLoggedIn } from './redux/auth/authSelectors';
const PreviewPage = lazy(() => import('./pages/PreviewPage/PreviewPage'));
const LoginPage = lazy(() => import('./pages/Login/LoginPage'));
const RegisterPage = lazy(() => import('./pages/Register/RegisterPage'));
const CalculatorPage = lazy(() =>
  import('./pages/CalculatorPage/CalculatorPage')
);
const DiaryPage = lazy(() => import('./pages/DairyPage/DiaryPage'));

const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  const currentUserEmail = useSelector(getUserEmail);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, currentUserEmail]);

  return (
    !isRefreshing && (
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ToggleTheme
          theme={theme}
          toggleTheme={toggleTheme}
          className={
            isLoggedIn ? 'theme-mobile-loggedIn' : 'theme-mobile-not-loggedIn'
          }
        />
        <Suspense fallback={<Loader />}>
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
