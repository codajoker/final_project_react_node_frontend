import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DiaryPage from './pages/DairyPage/DiaryPage';
import PreviewPage from './pages/PreviewPage/PreviewPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Toast from './components/Toast';
import CalculatorPage from './pages/CalculatorPage/CalculatorPage';
const App = () => {
  return (
    <>
      {/* <UserInfo /> */}
      <Routes>
        <Route path="/" element={<PreviewPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="/diary" element={<DiaryPage />}></Route>
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
      <Toast />
    </>
  );
};

export default App;
