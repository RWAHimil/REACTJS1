/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Form({ addContact }) {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (contactData.name === "" || contactData.email === "") {
      alert("Please Fill all the Details");
      return;
    }
    addContact(contactData);
    // console.log(contactData);
    setContactData({ name: "", email: "" });
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          id="name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          id="email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <button onClick={handleAdd}>Add</button>
      </form>
    </>
  );
}
