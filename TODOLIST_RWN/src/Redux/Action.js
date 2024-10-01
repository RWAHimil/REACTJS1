export const Add = (payload) => {
  return {
    type: "ADD",
    payload
  };
};

export const Delete = (payload) => {
  return {
    type: "DELETE",
    payload
  };
};

export const Edit = (payload) => {
  return {
    type: "EDIT",
    payload
  };
};
