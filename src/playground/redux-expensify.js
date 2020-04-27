import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_ITEM
const addLegendItem = ({ description = "", colorCode = "" } = {}) => ({
  type: "ADD_ITEM",
  legendItem: {
    id: uuid(),
    description,
    colorCode,
  },
});
// REMOVE_ITEM
const removeLegendItem = ({ id } = {}) => ({
  type: "REMOVE_ITEM",
  id,
});

// EDIT_ITEM
const editLegendItem = (id, updates) => ({
  type: "EDIT_ITEM",
  id,
  updates,
});
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE



// Store creation

const store = createStore(
  combineReducers({
    legendItem: legendItemReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const itemOne = store.dispatch(
  addLegendItem({ description: "Rent", colorCode: "#fff" })
);
const itemTwo = store.dispatch(
  addLegendItem({ description: "second", colorCode: "#3333" })
);
// const expenseTwo = store.dispatch(
//   addExpense({ description: "Coffee", amount: 300 })
// );

store.dispatch(removeLegendItem({ id: itemOne.legendItem.id }));

store.dispatch(
  editLegendItem(itemTwo.legendItem.id, { description: "siusiorek" })
);
const demoState = {
  legend: [
    {
      id: "poijasdfhwer",
      description: "January Rent",
      colorCode: "",
    },
  ],
};
