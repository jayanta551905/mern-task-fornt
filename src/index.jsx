import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/bootstrap.css';
import '../src/assets/css/animate.min.css';
import '../src/assets/css/style.css';
import App from './App';
import Provider from "react-redux/es/components/Provider";
import store from "../src/redux/store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);
