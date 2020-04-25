import { createStore, combineReducers } from "redux";
import uuid from "uuid";
//ADD CHART
const addChart = ({ name, table = [], createdAt = 0 } = {}) => ({
  type: "ADD_CHART",
  chart: {
    id: uuid(),
  },
});

const chartsReducerDefaultState = [];
const chartsReducer = (state = chartsReducerDefaultState, action) => {
  switch (Selection.type) {
    default:
      return state;
  }
};

const legendReducerDefaultState = [];
const legendReducer = (state = legendReducerDefaultState, action) => {
  switch (Selection.type) {
    default:
      return state;
  }
};

//store creation
const store = createStore(
  combineReducers({
    charts: chartsReducer,
    legend: legendReducer,
  })
);
console.log(store.getState());

const demoState = {
  legend: [
    { name: "mr/fold", color: "#333" },
    { name: "mr/call", color: "#333" },
    { name: "mr/4bet", color: "#333" },
  ],
  charts: [
    {
      id: "adfasdfasdf",
      name: "name of this chart",
      rangesData: [
        {
          name: 'HU SB',
          ranges: [
            {
              title: '25+bb',
              range: [{id: 'AKo', colorCode: 'mr'}]
            },
          ]
        }
      ]
    },
  ],
  createdAt: 0,
};
