import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DiaryPage from './pages/DairyPage/DiaryPage';
import PreviewPage from './pages/PreviewPage/PreviewPage';

const App = () => {
  return (
    <>
      {/* <UserInfo /> */}
      <Routes>
        <Route path="/" element={<PreviewPage />} />
        <Route path="/signin" />
        <Route path="/registration" />
        <Route path="/diary" element={<DiaryPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
