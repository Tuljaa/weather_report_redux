import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import './css/index.css'
  
const rootElement = document.getElementById("root");
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

