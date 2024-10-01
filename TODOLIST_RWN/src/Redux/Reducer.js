/* eslint-disable no-case-declarations */
const initialValue = [];

export const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter((ele, index) => index !== action.payload);

    case "EDIT":
      const { index, newValue } = action.payload;
      return state.map((ele, i) => (index === i ? newValue : ele));
    //       This code snippet is a reducer function in a Redux application that handles the "EDIT" action type.

    // The action.payload object contains two properties: index and newValue.
    // The reducer function uses the map() method to iterate over the state array.
    // For each element in the array, it checks if the index matches the current index being iterated over.
    // If the index matches, it replaces the current element with the newValue provided in the action payload.
    // If the index does not match, it simply returns the current element unchanged.
    // The end result is a new state array where the element at the specified index has been replaced with the new value.

    default:
      return state;
  }
};
