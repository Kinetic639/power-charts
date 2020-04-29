import { createStore, combineReducers } from "redux";
import legendItemReducer from "../reducers/legendItems";

export default () => {
  const store = createStore(
    combineReducers({
      legendItem: legendItemReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
