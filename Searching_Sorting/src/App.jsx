import { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";

export default function App() {
  const [user, setUser] = useState(() => {
    const storedData = localStorage.getItem("Data");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [inputValue, setInputValue] = useState({
    name: "",
    password: ""
  });

  const [searchQuery, setSearchQuery] = useState("");

  const [edit, setEdit] = useState(null);
  const [editValue, setEditValue] = useState({
    editName: "",
    editPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setUser([...user, inputValue]);
    console.log(inputValue.name, inputValue.password);

    setInputValue({
      name: "",
      password: ""
    });
    setEdit(null);
  };

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(user));
  }, [user]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = user.filter((u) => {
    return (
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.password.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const updateUser = user.map((u, index) =>
      index === edit
        ? { name: editValue.editName, password: editValue.editPassword }
        : u
    );
    setUser(updateUser);
    setEdit(null);
    setEditValue({
      editPassword: "",
      editName: ""
    });
  };

  const handleDelete = (i) => {
    const updateData = user.filter((_, index) => i !== index);
    setUser(updateData);
    localStorage.setItem("Data", JSON.stringify(updateData));
  };

  const handleEdit = (i) => {
    setEdit(i);
    setEditValue({ editName: user[i].name, editPassword: user[i].password });
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={inputValue.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          value={inputValue.password}
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      <br />
      <br />

      {user && user.length > 0 ? (
        <>
          <input
            type="text"
            placeholder="Search by Name & Password"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <br />
          <br />
          <table border={2}>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((u, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.password}</td>
                  <td>
                    <button onClick={() => handleEdit(i)}>Edit</button>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}

      <br />
      <br />
      {edit !== null ? (
        <form onSubmit={handleUpdateForm}>
          <input
            type="text"
            placeholder="Enter Edit Name"
            value={editValue.editName}
            onChange={(e) =>
              setEditValue({ ...editValue, editName: e.target.value })
            }
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Edit Password"
            value={editValue.editPassword}
            onChange={(e) =>
              setEditValue({ ...editValue, editPassword: e.target.value })
            }
          />
          <br />
          <br />
          <button>Submit</button>
          <button type="button" onClick={() => setEdit(null)}>
            Cancel
          </button>
        </form>
      ) : null}
      <br />
      <br />
      <Form />
    </>
  );
}
