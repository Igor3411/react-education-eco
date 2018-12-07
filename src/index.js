import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/app.css";
import store from "./store/configureStore";
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
