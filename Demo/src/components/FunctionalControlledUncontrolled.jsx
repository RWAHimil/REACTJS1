// import { useState } from "react";

import { useRef } from "react";

// export default function FunctionalControlledUncontrolled() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleForm = (e) => {
//     e.preventDefault();
//     setName("");
//     setEmail("");
//     console.log(name);
//     console.log(email);
//   };

//   return (
//     <>
//       <h1>Controlled Component Functional </h1>
//       <form action="" onSubmit={handleForm}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <br />
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <br />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }

export default function FunctionalControlledUncontrolled() {
  const nameInput = useRef();
  const emailInput = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value);
    console.log(emailInput.current.value);
  };

  return (
    <>
      <h1>Uncontrolled Component Functional </h1>
      <form action="" onSubmit={handleForm}>
        <input type="text" ref={nameInput} placeholder="Enter Your Name" />
        <br />
        <br />
        <input type="email" ref={emailInput} placeholder="Enter Your Email" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
