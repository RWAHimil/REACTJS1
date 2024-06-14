import { useState, useEffect } from "react";

export default function CrudOperation() {
  const [items, setItems] = useState(() => {
    const storedData = localStorage.getItem("itemData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    age: ""
  });
  const [edit, setEdit] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("itemData", JSON.stringify(items));
  }, [items]);

  const handleAddData = () => {
    if (
      !inputValue.name ||
      !inputValue.email ||
      !inputValue.password ||
      !inputValue.gender ||
      !inputValue.city ||
      !inputValue.age
    ) {
      setError("All fields are required");
      return;
    }
    setItems([...items, inputValue]);
    setInputValue({
      name: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      age: ""
    });
    setError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  const handleEdit = (index) => {
    setEdit(index);
    setInputValue(items[index]);
  };

  const handleSaveData = () => {
    const updateData = [...items];
    updateData[edit] = inputValue;
    setItems(updateData);
    setInputValue({
      name: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      age: ""
    });
    setEdit(null);
  };

  const handleDelete = (index) => {
    const updatedData = [...items];
    updatedData.splice(index, 1);
    setItems(updatedData);
  };

  return (
    <>
      <h1>Crud Operation</h1>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        placeholder="Enter Name"
        value={inputValue.name}
        onChange={handleInputChange}
        name="name"
      />
      <br />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        placeholder="Enter Email"
        value={inputValue.email}
        onChange={handleInputChange}
        name="email"
      />
      <br />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        placeholder="Enter Password"
        value={inputValue.password}
        onChange={handleInputChange}
        name="password"
      />
      <br />
      <br />
      <label htmlFor="gender">Gender: </label>
      <input
        type="radio"
        value="Male"
        onChange={handleInputChange}
        name="gender"
        id="g1"
      />
      <label htmlFor="g1">Male</label>
      <input
        type="radio"
        value="Female"
        onChange={handleInputChange}
        name="gender"
        id="g2"
      />
      <label htmlFor="g2">Female</label>
      <br />
      <br />
      <label htmlFor="city">City: </label>
      <select value={inputValue.city} onChange={handleInputChange} name="city">
        <option value="">---Select City---</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Kolkata">Kolkata</option>
      </select>
      <br />
      <br />
      <label htmlFor="age">Age: </label>
      <input
        type="number"
        placeholder="Enter Age"
        value={inputValue.age}
        onChange={handleInputChange}
        name="age"
      />
      <br />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {edit === null ? (
        <button onClick={handleAddData}>Add Data</button>
      ) : (
        <button onClick={handleSaveData}>Save Changes</button>
      )}
      <hr />
      {items.length > 0 ? (
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>City</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.gender}</td>
                <td>{item.city}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
}
