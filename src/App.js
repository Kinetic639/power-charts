import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker";
import "react-dates/lib/css/_datepicker.css";


ReactDOM.render(<AppRouter />, document.getElementById("root"));

serviceWorker.unregister();
