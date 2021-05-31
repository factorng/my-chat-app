import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";
import App from "./App";

import { createHashHistory } from "history";
const history = createHashHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
