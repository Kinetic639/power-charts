import uuid from "uuid";

// ADD_ITEM
export const addLegendItem = ({ description = "", colorCode = "" } = {}) => ({
  type: "ADD_ITEM",
  legendItem: {
    id: uuid(),
    description,
    colorCode,
  },
});
// REMOVE_ITEM
export const removeLegendItem = ({ id } = {}) => ({
  type: "REMOVE_ITEM",
  id,
});

// EDIT_ITEM
export const editLegendItem = (id, updates) => ({
  type: "EDIT_ITEM",
  id,
  updates,
});
