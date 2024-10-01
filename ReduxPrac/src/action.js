export const addItem = (item) => {
  return {
    type: "ADDITEM",
    payload: item
  };
};

export const deleteItem = (index) => {
  return {
    type: "DELETEITEM",
    payload: index
  };
};

export const editItem = ({ index, item }) => {
  return {
    type: "EDITITEM",
    payload: { index, item }
  };
};
