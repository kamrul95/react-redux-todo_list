import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import allReducer from "./reducers/index";
import App from "./components/App";

const store = createStore(allReducer);


render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
