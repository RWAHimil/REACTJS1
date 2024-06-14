// import { useState } from "react";

// export default function NormalCrud&LocalCrud() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });
//   const [edit, setEdit] = useState(null);

//   const handleAddData = () => {
//     if (
//       inputValue.name === "" ||
//       inputValue.email === "" ||
//       inputValue.password === ""
//     ) {
//       alert("Please Enter Values");
//     } else if (inputValue.name.length < 3) {
//       alert("Name should be more than two characters");
//     } else {
//       setItems([...items, inputValue]);
//       setInputValue({ name: "", email: "", password: "" });
//       setEdit(null);
//     }
//   };

//   const handleEditData = (index) => {
//     setEdit(index);
//     setInputValue(items[index]);
//   };

//   const handleSaveItems = () => {
//     const updatedData = [...items];
//     updatedData[edit] = inputValue;
//     setItems(updatedData);
//     setInputValue({ name: "", email: "", password: "" });
//     setEdit(null);
//   };

//   const handleDeleteData = (index) => {
//     const updatedData = items.filter((item, i) => i !== index);
//     setItems(updatedData);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={inputValue.name}
//         onChange={(e) => {
//           setInputValue({ ...inputValue, name: e.target.value });
//         }}
//       />
//       <br />
//       <br />
//       <input
//         type="email"
//         placeholder="Enter Email"
//         value={inputValue.email}
//         onChange={(e) =>
//           setInputValue({ ...inputValue, email: e.target.value })
//         }
//       />
//       <br />
//       <br />
//       <input
//         type="password"
//         placeholder="Enter Password"
//         value={inputValue.password}
//         onChange={(e) => {
//           setInputValue({ ...inputValue, password: e.target.value });
//         }}
//       />
//       <br />
//       <br />
//       {edit === null ? (
//         <button
//           onClick={() => {
//             handleAddData();
//           }}
//         >
//           Add Data
//         </button>
//       ) : (
//         <button
//           onClick={() => {
//             handleSaveItems();
//           }}
//         >
//           Save Changes
//         </button>
//       )}
//       <hr />
//       <h2>Data Show</h2>
//       <table border={2}>
//         <tr>
//           <th>Sr No</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Password</th>
//           <th colSpan={2}>Action</th>
//         </tr>
//         {items.map((item, index) => (
//           <tr key={index}>
//             <td>{index + 1}</td>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.password}</td>
//             <td>
//               <button onClick={() => handleEditData(index)}>Edit</button>
//             </td>
//             <td>
//               <button onClick={() => handleDeleteData(index)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </table>
//     </>
//   );
// }

import { useState, useEffect } from "react";

function NormalCrudLocalCrud() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("itemData");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("itemData", JSON.stringify(items));
  }, [items]);

  const handleAddData = () => {
    if (
      inputValue.name === "" ||
      inputValue.email === "" ||
      inputValue.password === ""
    ) {
      alert("Please Enter Values");
    } else if (inputValue.name.length < 3) {
      alert("Name should be more than two characters");
    } else {
      setItems([...items, inputValue]);
      setInputValue({ name: "", email: "", password: "" });
      setEdit(null);
    }
  };

  const handleEditData = (index) => {
    setEdit(index);
    setInputValue(items[index]);
  };

  const handleSaveItems = () => {
    const updatedData = [...items];
    updatedData[edit] = inputValue;
    setItems(updatedData);
    setInputValue({ name: "", email: "", password: "" });
    setEdit(null);
  };

  const handleDeleteData = (index) => {
    const updatedData = items.filter((item, i) => i !== index);
    setItems(updatedData);
  };
  
  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={inputValue.name}
        onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Enter Email"
        value={inputValue.email}
        onChange={(e) =>
          setInputValue({ ...inputValue, email: e.target.value })
        }
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={inputValue.password}
        onChange={(e) =>
          setInputValue({ ...inputValue, password: e.target.value })
        }
      />
      <br />
      <br />
      {edit === null ? (
        <button onClick={handleAddData}>Add Data</button>
      ) : (
        <button onClick={handleSaveItems}>Save Changes</button>
      )}

      <hr />
      <h2>Data Show</h2>
      <table border={1} cellPadding={5}>
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th colSpan={2}>Action</th>
        </tr>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>
              <button onClick={() => handleEditData(index)}>Edit</button>
            </td>
            <td>
              <button onClick={() => handleDeleteData(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default NormalCrudLocalCrud;
