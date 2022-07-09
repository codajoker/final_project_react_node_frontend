import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/signin" />
        <Route path="/registration" />
      </Routes>
    </>
  );
};

export default App;
