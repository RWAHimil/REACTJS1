import { useEffect, useState } from "react";

export default function Demo() {
  const [items, setItems] = useState(() => {
    const storeddata = localStorage.getItem("itemData");
    return storeddata ? JSON.parse(storeddata) : [];
  });
  const [inputValue, setInputValue] = useState({
    name: "",
    email: ""
  });
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("itemData", JSON.stringify(items));
  });

  const handleAddData = () => {
    setItems([...items, inputValue]);
    console.log(items);

    console.log(inputValue);

    setInputValue({ name: "", email: "" });
    setEdit(null);
  };

  const handleEdit = (index) => {
    setEdit(index);
    setInputValue(items[index]);
  };

  const handleSaveData = () => {
    const updatedData = [...items];
    updatedData[edit] = inputValue;
    setItems(updatedData);
    setInputValue({ name: "", email: "" });
    setEdit(null);
  };

  const handleDelete = (index) => {
    const updatedData = [...items];
    updatedData.splice(index, 1);
    setItems(updatedData);
  };
  return (
    <>
      <h2>Form</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={inputValue.name}
        onChange={(e) => {
          setInputValue({ ...inputValue, name: e.target.value });
        }}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Enter Email"
        value={inputValue.email}
        onChange={(e) => {
          setInputValue({ ...inputValue, email: e.target.value });
        }}
      />
      <br />
      <br />
      {edit === null ? (
        <button onClick={() => handleAddData()}>Add Data</button>
      ) : (
        <button onClick={() => handleSaveData()}>Save Changes</button>
      )}

      <br />
      <br />
      <table border={2}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        {items.map((item, index) => (
          <>
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
}
