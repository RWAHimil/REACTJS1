// import { useState } from "react";

// const UserList = () => {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState({ name: "", password: "" });

//   const handleAddItem = () => {
//     setItems([...items, inputValue]);
//     setInputValue({ name: "", password: "" });
//   };

//   const handleDeleteItem = (index) => {
//     const updatedItems = [...items];
//     updatedItems.splice(index, 1);
//     setItems(updatedItems);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter name"
//         value={inputValue.name}
//         onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
//       />
//       <br />
//       <br />
//       <input
//         type="password"
//         placeholder="Enter password"
//         value={inputValue.password}
//         onChange={(e) =>
//           setInputValue({ ...inputValue, password: e.target.value })
//         }
//       />
//       <br />
//       <br />
//       <button onClick={handleAddItem}>Add Item</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.password}
//             <button onClick={() => handleDeleteItem(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;

// import React, { useState } from "react";

// const UserList = () => {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState({ name: "", password: "" });
//   const [editIndex, setEditIndex] = useState(null);

//   const handleAddEditItem = () => {
//     if (editIndex !== null) {
//       const updatedItems = items.map((item, index) =>
//         index === editIndex ? inputValue : item
//       );
//       setItems(updatedItems);
//       setEditIndex(null);
//     } else {
//       setItems([...items, inputValue]);
//     }
//     setInputValue({ name: "", password: "" });
//   };

//   const handleEditItem = (index) => {
//     setEditIndex(index);
//     setInputValue(items[index]);
//   };

//   const handleDeleteItem = (index) => {
//     const updatedItems = items.filter((item, i) => i !== index);
//     setItems(updatedItems);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter name"
//         value={inputValue.name}
//         onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
//       />
//       <br />
//       <br />
//       <input
//         type="password"
//         placeholder="Enter password"
//         value={inputValue.password}
//         onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })}
//       />
//       <br />
//       <br />
//       <button onClick={handleAddEditItem}>
//         {editIndex !== null ? "Save Changes" : "Add Item"}
//       </button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.password}
//             <button onClick={() => handleDeleteItem(index)}>Delete</button>
//             <button onClick={() => handleEditItem(index)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;

import { useState } from "react";

const UserList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState({ name: "", password: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddItem = () => {
    setItems([...items, inputValue]);
    setInputValue({ name: "", password: "" });
    setEditingIndex(null);
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
    setInputValue(items[index]);
  };

  const handleSaveItem = () => {
    const updatedItems = [...items];
    updatedItems[editingIndex] = inputValue;
    setItems(updatedItems);
    setEditingIndex(null);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={inputValue.name}
        onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={inputValue.password}
        onChange={(e) =>
          setInputValue({ ...inputValue, password: e.target.value })
        }
      />
      <br />
      <br />
      {editingIndex === null ? (
        <button onClick={handleAddItem}>Add Item</button>
      ) : (
        <button onClick={handleSaveItem}>Save Item</button>
      )}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.password}
            <button onClick={() => handleEditItem(index)}>Edit</button>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
