const initialValue = {
  items: []
};

export const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADDITEM": {
      return { ...state, items: [...state.items, action.payload] };
    }
    case "DELETEITEM": {
      const newItems = state.items.filter((_, i) => i !== action.payload);
      return { ...state, items: newItems };
    }
    case "EDITITEM": {
      const newItems = state.items.map((currItem, i) =>
        i === action.payload.index ? action.payload.item : currItem
      );
      return { ...state, items: newItems };
    }
    default: {
      return state;
    }
  }
};
