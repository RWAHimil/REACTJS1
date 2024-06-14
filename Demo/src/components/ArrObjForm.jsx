import { useState } from "react";

const ArrObjForm = () => {
  const [formData, setFormData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const checkboxValue = isChecked;

    const newObject = { name, email, checkboxValue, radioValue };

    setFormData([...formData, newObject]);

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Checkbox Value: ", checkboxValue);
    console.log("Radio Value: ", radioValue);

    event.target.reset(); // Clear the form fields after submission
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <br />
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label>Checkbox</label>
        <br />
        <br />
        <input
          type="radio"
          name="radiogroup"
          value="Option 1"
          checked={radioValue === "Option 1"}
          onChange={handleRadioChange}
        />
        <label>Option 1</label>
        <br />
        <input
          type="radio"
          name="radiogroup"
          value="Option 2"
          checked={radioValue === "Option 2"}
          onChange={handleRadioChange}
        />
        <label>Option 2</label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        {formData.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>
              Checkbox Value: {item.checkboxValue ? "Checked" : "Unchecked"}
            </p>
            <p>Radio Value: {item.radioValue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrObjForm;
