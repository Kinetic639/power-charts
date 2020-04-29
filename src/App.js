import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { addLegendItem } from "./actions/legenItems";

// import ChartTest from "./playground/ChartTest";
// import LegendEditor from "./components/core/LegendEditor";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addLegendItem({ description: "Rent", colorCode: "#fff" }));
store.dispatch(addLegendItem({ description: "Rent", colorCode: "#fff" }));
store.dispatch(addLegendItem({ description: "Rent", colorCode: "#fff" }));
store.dispatch(addLegendItem({ description: "Rent", colorCode: "#fff" }));
store.dispatch(addLegendItem({ description: "Rent", colorCode: "#fff" }));
store.dispatch(addLegendItem({ description: "Rent", colorCode: "#fff" }));
store.dispatch(
  addLegendItem({ description: "Renaasfasdt", colorCode: "#ffasdfff" })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

serviceWorker.unregister();
