// import { useState } from "react";

// export default function FormArrayObj() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     // console.log(e.target.value);
//     // console.log(e.target.name);
//     console.log(e.target.placeholder);
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleForm = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     console.log("Name :" + formData.name);

//     setFormData({
//       name: "",
//       email: "",
//       password: ""
//     });
//   };

//   return (
//     <>
//       <form action="" onSubmit={handleForm}>
//         {/* <h1>{formData.name}</h1>
//         <h1>{formData.email}</h1>
//         <h1>{formData.password}</h1> */}
//         <input
//           type="text"
//           placeholder="Enter Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <input
//           type="email"
//           placeholder="Enter Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <input
//           type="password"
//           placeholder="Enter Password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }

import { useState } from "react";

export default function FormArrayObj() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    subscription: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      password: "",
      gender: "",
      subscription: false
    });
  };

  return (
    <>
      <form action="" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            name="subscription"
            checked={formData.subscription}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
