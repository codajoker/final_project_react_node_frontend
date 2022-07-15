import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Toast from './components/Toast';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { refreshUser } from './redux/auth/authOperations';
import { getIsRefreshing } from './redux/auth/authSelectors';
import Loader from './components/Loader/Loader';

const PreviewPage = lazy(() => import('./pages/PreviewPage/PreviewPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const CalculatorPage = lazy(() =>
  import('./pages/CalculatorPage/CalculatorPage')
);
const DiaryPage = lazy(() => import('./pages/DairyPage/DiaryPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
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
      </>
    )
  );
};

export default App;
