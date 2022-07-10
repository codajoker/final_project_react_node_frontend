import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { DairyProductList } from './components/DairyProductList/DairyProductList';
const products = [{
  "_id": {
    "$oid": "5d51694802b2373622ff553b"
  },
  "categories": [
    "яйца"
  ],
  "weight": 100,
  "title": {
    "ru": "Яйцо куриное (желток сухой)",
    "ua": "Яйце куряче (жовток сухий)"
  },
  "calories": 623,
  "groupBloodNotAllowed": [
    null,
    true,
    false,
    false,
    false
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "5d51694802b2373622ff554d"
  },
  "categories": [
    "зерновые"
  ],
  "weight": 100,
  "title": {
    "ru": "Горох маш Ярмарка Платинум",
    "ua": "Горох маш Ярмарка Платинум"
  },
  "calories": 312,
  "groupBloodNotAllowed": [
    null,
    true,
    false,
    false,
    false
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "5d51694802b2373622ff555c"
  },
  "categories": [
    "зерновые"
  ],
  "weight": 100,
  "title": {
    "ru": "Гречневая крупа (ядрица) зелёная",
    "ua": "Гречана крупа (ядриця) зелена"
  },
  "calories": 296,
  "groupBloodNotAllowed": [
    null,
    true,
    false,
    true,
    true
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "5d51694802b2373622ff553a"
  },
  "categories": [
    "яйца"
  ],
  "weight": 100,
  "title": {
    "ru": "Яйцо куриное (вареное всмятку)",
    "ua": "Яйце куряче (варене всмятку)"
  },
  "calories": 159,
  "groupBloodNotAllowed": [
    null,
    true,
    false,
    false,
    false
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "5d51694802b2373622ff5530"
  },
  "categories": [
    "яйца"
  ],
  "weight": 100,
  "title": {
    "ru": "Омлет с сыром",
    "ua": "Омлет із сиром"
  },
  "calories": 342,
  "groupBloodNotAllowed": [
    null,
    true,
    false,
    false,
    false
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "5d51694802b2373622ff5539"
  },
  "categories": [
    "яйца"
  ],
  "weight": 100,
  "title": {
    "ru": "Яйцо куриное (вареное вкрутую)",
    "ua": "Яйце куряче (варене круто)"
  },
  "calories": 160,
  "groupBloodNotAllowed": [
    null,
    true,
    false,
    false,
    false
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "5d51694802b2373622ff552c"
  },
  "categories": [
    "яйца"
  ],
  "weight": 100,
  "title": {
    "ru": "Меланж яичный",
    "ua": "Меланж яєчний"
  },
  "calories": 157,
  "groupBloodNotAllowed": [
    null,
    true,
    false,
    false,
    false
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "5d51694802b2373622ff5547"
  },
  "categories": [
    "зерновые"
  ],
  "weight": 100,
  "title": {
    "ru": "Булгур",
    "ua": "Булгур"
  },
  "calories": 342,
  "groupBloodNotAllowed": [
    null,
    true,
    false,
    false,
    false
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "5d51694802b2373622ff5565"
  },
  "categories": [
    "зерновые"
  ],
  "weight": 100,
  "title": {
    "ru": "Гречневые хлопья Myllyn Paras для каши",
    "ua": "Гречані пластівці Myllyn Paras для каші"
  },
  "calories": 340,
  "groupBloodNotAllowed": [
    null,
    true,
    false,
    true,
    true
  ],
  "__v": 0
}]
const App = () => {
  return (
    <>
      <Header />
      <DairyProductList products={ products } />
      <Routes>
        <Route path="/" />
        <Route path="/signin" />
        <Route path="/registration" />
      </Routes>
    </>
  );
};

export default App;
