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
}, {
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
    }, {
  "_id": {
    "$oid": "5d51694902b2373622ff5f78"
  },
  "categories": [
    "безалкогольные напитки"
  ],
  "weight": 100,
  "title": {
    "ru": "Томатный сок",
    "ua": "Томатний сік"
  },
  "calories": 21,
  "groupBloodNotAllowed": [
    null,
    false,
    false,
    false,
    false
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "5d51694902b2373622ff5f82"
  },
  "categories": [
    "безалкогольные напитки"
  ],
  "weight": 100,
  "title": {
    "ru": "Яблочный нектар",
    "ua": "Яблучний нектар"
  },
  "calories": 41,
  "groupBloodNotAllowed": [
    null,
    false,
    false,
    false,
    false
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "5d51694902b2373622ff5f82"
  },
  "categories": [
    "безалкогольные напитки"
  ],
  "weight": 100,
  "title": {
    "ru": "Яблочный нектар",
    "ua": "Яблучний нектар"
  },
  "calories": 41,
  "groupBloodNotAllowed": [
    null,
    false,
    false,
    false,
    false
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "5d51694902b2373622ff5f82"
  },
  "categories": [
    "безалкогольные напитки"
  ],
  "weight": 100,
  "title": {
    "ru": "Яблочный нектар",
    "ua": "Яблучний нектар"
  },
  "calories": 41,
  "groupBloodNotAllowed": [
    null,
    false,
    false,
    false,
    false
  ],
  "__v": 0
},{
  "_id": {
    "$oid": "5d51694902b2373622ff5f82"
  },
  "categories": [
    "безалкогольные напитки"
  ],
  "weight": 100,
  "title": {
    "ru": "Яблочный нектар",
    "ua": "Яблучний нектар"
  },
  "calories": 41,
  "groupBloodNotAllowed": [
    null,
    false,
    false,
    false,
    false
  ],
  "__v": 0
}]
const App = () => {
  return (
    <>
      <Header />
      < DairyProductList products={products}/>
      <Routes>
        <Route path="/" />
        <Route path="/signin" />
        <Route path="/registration" />
      </Routes>
    </>
  );
};

export default App;
