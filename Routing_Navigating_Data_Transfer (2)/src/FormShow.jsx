import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

export default function FormShow() {
  const navigate = useNavigate();
  const location = useLocation();

  const [input, setInput] = useState({
    name: "",
    father: "",
    mother: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    date: ""
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const state = location.state;
    if (state && state.isEdit) {
      setEditIndex(state.index);
      setInput(state.item);
    }
  }, [location.state]);

  const handleForm = (e) => {
    e.preventDefault();
    let storedData = JSON.parse(localStorage.getItem("FormData")) || [];

    if (editIndex !== null) {
      storedData[editIndex] = input;
      localStorage.setItem("FormData", JSON.stringify(storedData));
      setEditIndex(null);
    } else {
      storedData.push(input);
      localStorage.setItem("FormData", JSON.stringify(storedData));
    }

    setInput({
      name: "",
      father: "",
      mother: "",
      email: "",
      phone: "",
      password: "",
      gender: "",
      date: ""
    });

    navigate("/data");
  };

  return (
    <div className="ForForms">
      <h2 className="ForHeading">
        {editIndex !== null ? "Edit the Form" : "Fill The Form"}
      </h2>
      <form onSubmit={handleForm}>
        <div className="ForDisFlex">
          {/* Name, Father Name, Mother Name, Email & Phone Input Fields */}
          {/* Repeat similar structure for input fields */}
          {["name", "father", "mother", "email", "phone"].map((field) => (
            <div key={field}>
              <label>{`Enter Your ${
                field.charAt(0).toUpperCase() + field.slice(1)
              }:`}</label>
              <input
                type={field === "email" ? "email" : "text"}
                placeholder={`Enter Your ${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }`}
                value={input[field]}
                onChange={(e) =>
                  setInput({ ...input, [field]: e.target.value })
                }
              />
            </div>
          ))}

          <div>
            <label>Enter Your Password:</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>

          <h4>Select Your Gender:</h4>
          {["Male", "Female", "Other"].map((gender) => (
            <div key={gender}>
              <input
                type="radio"
                name="gender"
                id={gender.toLowerCase()}
                value={gender}
                checked={input.gender === gender}
                onChange={(e) => setInput({ ...input, gender: e.target.value })}
              />
              <label htmlFor={gender.toLowerCase()}>{gender}</label>
            </div>
          ))}

          <div>
            <h4>Enter Your Birth Date:</h4>
            <input
              type="date"
              value={input.date}
              onChange={(e) => setInput({ ...input, date: e.target.value })}
            />
          </div>
        </div>

        <button type="submit" className="ForBTN">
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
}
