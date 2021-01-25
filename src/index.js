import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./vehicle.js";
import App from "./App";
 
const vehicle = createStore(rootReducer);
 
const rootElement = document.getElementById("root");
 
ReactDOM.render(
  <Provider store={vehicle}>
    <App />
  </Provider>,
  rootElement
);

