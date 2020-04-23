import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(<AppRouter />, document.getElementById("root"));

serviceWorker.unregister();
