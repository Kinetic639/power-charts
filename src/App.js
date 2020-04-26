import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker";
import ChartTest from "./playground/ChartTest";
import LegendEditor from "./components/core/LegendEditor";

ReactDOM.render(<LegendEditor />, document.getElementById("root"));

serviceWorker.unregister();
