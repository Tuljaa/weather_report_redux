import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer.js";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
 
const reducer = createStore(rootReducer);
 
const rootElement = document.getElementById("root");
 
ReactDOM.render(
  <Provider store={reducer}>
    <App />
  </Provider>,
  rootElement
);

