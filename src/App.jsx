import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import UserInfo from './components/UserInfo/UserInfo';

const App = () => {
  return (
    <>
      <Header />
      <UserInfo />
      <Routes>
        <Route path="/" />
        <Route path="/signin" />
        <Route path="/registration" />
      </Routes>
    </>
  );
};

export default App;
