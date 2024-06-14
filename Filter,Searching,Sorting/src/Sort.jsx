import { useState, useEffect } from "react";
import "./App.css";

export default function FilterSearch() {
  const [list, setList] = useState(() => {
    const storedData = localStorage.getItem("Data");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [inputValue, setInputValue] = useState({
    name: "",
    password: ""
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [edit, setEdit] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(list));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, inputValue]);
    setInputValue({ name: "", password: "" });
    setEdit(null);
  };

  const handleEdit = (index) => {
    setEdit(index);
    setInputValue(list[index]);
  };

  const handleSave = () => {
    const updatedList = [...list];
    updatedList[edit] = inputValue;
    setList(updatedList);
    setInputValue({ name: "", password: "" });
    setEdit(null);
  };

  const handleDelete = (index) => {
    const updatedData = [...list];
    updatedData.splice(index, 1);
    setList(updatedData);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sort
  const handleSort = (field) => {
    setSortBy(field);
  };

  const sortedList = sortBy
    ? [...list].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    : list;

  // Filter
  const filteredList = sortedList.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.password.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          value={inputValue.name}
          onChange={(e) =>
            setInputValue({ ...inputValue, name: e.target.value })
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
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
        ) : (
          <button onClick={() => handleSave()}>Save Changes</button>
        )}
        <br />
        <br />
      </form>

      {/* Search input field */}
      <input
        type="text"
        placeholder="Search Name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <hr />
      <hr />
      <hr />
      {/* Data Table */}
      {list.length > 0 ? (
        <table border={1} cellPadding={2}>
          <tr>
            <th>Sr No</th>
            <th>
              Name <button onClick={() => handleSort("name")}>&uarr;</button>
            </th>
            <th>
              Password{" "}
              <button onClick={() => handleSort("password")}>&uarr;</button>
            </th>
            <th>Actions</th>
          </tr>
          {filteredList.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      ) : null}
    </>
  );
}
