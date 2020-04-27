import { createStore, combineReducers } from "redux";
import legendItemReducer from "../reducers/legendItems";

export default () => {
  const store = createStore(
    combineReducers({
      legendItem: legendItemReducer,
    })
  );
  return store;
};
