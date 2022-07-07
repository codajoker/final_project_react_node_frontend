import React from "react";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store,  } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
