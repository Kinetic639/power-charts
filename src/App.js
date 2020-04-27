import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker";

import configureStore from "./store/configureStore";
import {addLegendItem} from './actions/legenItems'

import ChartTest from "./playground/ChartTest";
import LegendEditor from "./components/core/LegendEditor";

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
  });
  
  const itemOne = store.dispatch(
    addLegendItem({ description: "Rent", colorCode: "#fff" })
  );


ReactDOM.render(<LegendEditor />, document.getElementById("root"));

serviceWorker.unregister();
