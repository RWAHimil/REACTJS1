/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem, deleteItem } from "./action";
import "./App.css";

// Load state from localStorage
const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem("REDUX");
  if (savedState) {
    return JSON.parse(savedState);
  }
  return {
    items: []
  };
};

const initialState = loadStateFromLocalStorage();

export const reducer = (state = initialState, action) => {
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

export default function App() {
  const [item, setItem] = useState({ name: "", password: "" });
  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      dispatch(editItem({ index: editIndex, item }));
      setEditIndex(null);
    } else {
      dispatch(addItem(item));
    }
    setItem({ name: "", password: "" });
  };

  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };

  const handleEdit = (index) => {
    const itemToEdit = items[index];
    setItem(itemToEdit);
    setEditIndex(index);
  };

  useEffect(() => {
    const existingItems =
      JSON.parse(localStorage.getItem("REDUX"))?.items || [];
    if (existingItems.length !== items.length) {
      localStorage.setItem("REDUX", JSON.stringify(items));
    }
  }, [items]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={item.password}
          onChange={(e) => setItem({ ...item, password: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>
      <br />
      <br />
      <ul>
        {items.map((ele, i) => (
          <li key={i}>
            {ele.name} - {ele.password}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
