// actions.js
export const addTodo = (text, date) => ({
  type: "ADD_TODO",
  payload: { text, date }
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: id
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id
});

export const editTodo = (id, text) => ({
  type: "EDIT_TODO",
  payload: { id, text }
});
