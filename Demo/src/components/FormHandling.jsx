import { useState } from "react";

export default function FormHandling() {
  const [name, setName] = useState("");
  const [select, setSelect] = useState("");
  const [check, setChecked] = useState(false);

  const handleForm = (e) => {
    console.log(
      "Your Name is " +
        name +
        " Your Favourite Movie is " +
        select +
        " and You checked Terms and Conditions " +
        check
    );
    e.preventDefault();
  };

  return (
    <>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="">Name : </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <br />
        <label htmlFor="">Movies : </label>
        <select onChange={(e) => setSelect(e.target.value)}>
          <option>---Select---</option>
          <option>Marvel</option>
          <option>DC</option>
          <option>PSU</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
        <span>Terms and Conditions Applied</span>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
