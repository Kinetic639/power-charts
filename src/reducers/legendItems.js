// ITEMs Reducer

const legendItemReducerDefaultState = [];


export default (state = legendItemReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.legendItem];
    case "REMOVE_ITEM":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_ITEM":
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.updates,
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

