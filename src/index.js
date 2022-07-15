import React from 'react';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { logOut, refreshToken } from './redux/auth/authOperations.js';

axios.defaults.baseURL = 'https://sheltered-fjord-67703.herokuapp.com/';

function updateAuthHeader() {
  const token = store.getState().auth.token;
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
}

updateAuthHeader();
store.subscribe(() => updateAuthHeader());

axios.interceptors.response.use(undefined, error => {
  if(error.response?.status === 401) {
    const state = store.getState();
    if(state.auth.isLoggedIn) {
      store.dispatch(logOut());
    }
  }
  throw error;
});

setInterval(() => {
  const state = store.getState();
  if(state.auth.isLoggedIn) {
    store.dispatch(refreshToken());
  }
}, 5 * 60 * 1000);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/final_project_react_node_frontend/">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
