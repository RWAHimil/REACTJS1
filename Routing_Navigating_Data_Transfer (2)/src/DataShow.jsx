import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function DataShow() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState({
    name: "",
    father: "",
    mother: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    date: ""
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("FormData")) || [];
    setData(storedData);
  }, []);

  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    localStorage.setItem("FormData", JSON.stringify(updatedData));
    setData(updatedData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    // Populate the editInput with the existing data
    setEditInput(data[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditInput({ ...editInput, [name]: value });
  };

  const handleSave = (index) => {
    const updatedData = data.map((item, i) => (i === index ? editInput : item));
    localStorage.setItem("FormData", JSON.stringify(updatedData));
    setData(updatedData);
    setEditIndex(null); // Reset edit index to exit edit mode
    setEditInput({
      name: "",
      father: "",
      mother: "",
      email: "",
      phone: "",
      password: "",
      gender: "",
      date: ""
    }); // Clear form input
  };

  return (
    <div className="ForDataTable">
      <h2 className="ForHeading">Data Of Form</h2>
      {data.length > 0 && (
        <table border={2}>
          <thead>
            <tr>
              <td>Sr. No</td>
              <td>Name</td>
              <td>Father Name</td>
              <td>Mother Name</td>
              <td>Email Address</td>
              <td>Phone Number</td>
              <td>Password</td>
              <td>Gender</td>
              <td>Date Of Birth</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {editIndex === index ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={editInput.name}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="father"
                        value={editInput.father}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="mother"
                        value={editInput.mother}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={editInput.email}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="phone"
                        value={editInput.phone}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="password"
                        name="password"
                        value={editInput.password}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <select
                        name="gender"
                        value={editInput.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="date"
                        name="date"
                        value={editInput.date}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => handleSave(index)}
                        className="ForSaveBTN"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditIndex(null)}
                        className="ForCancelBTN"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{ele.name}</td>
                    <td>{ele.father}</td>
                    <td>{ele.mother}</td>
                    <td>{ele.email}</td>
                    <td>{ele.phone}</td>
                    <td>{ele.password}</td>
                    <td>{ele.gender}</td>
                    <td>{ele.date}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(index)}
                        className="ForEditBTN"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteData(index)}
                        className="ForDelBTN"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={() => navigate("/form")} className="ForDataBTN">
        Return To Form
      </button>
    </div>
  );
}
