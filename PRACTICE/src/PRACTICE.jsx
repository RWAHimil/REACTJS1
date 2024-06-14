// import { Component } from "react";

import { useState } from "react";

// export default class PRACTICE extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       checked: false,
//       radio: ""
//     };
//   }

//   handleForm = (e) => {
//     e.preventDefault();
//     console.log(this.state.name, this.state.checked, this.state.radio);
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleForm}>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             value={this.state.name}
//             onChange={(e) => this.setState({ name: e.target.value })}
//           />
//           <br />
//           <input
//             type="checkbox"
//             id="checked"
//             value={this.state.checked}
//             onChange={(e) => this.setState({ checked: e.target.value })}
//           />
//           <label htmlFor="checked">Check Me!!</label>
//           <br />
//           <input
//             type="radio"
//             name="male"
//             id="male"
//             value="male"
//             checked={this.state.radio === "male"}
//             onChange={(e) => this.setState({ radio: e.target.value })}
//           />
//           <label htmlFor="male">Male</label>

//           <input
//             type="radio"
//             name="female"
//             id="female"
//             value="female"
//             checked={this.state.radio === "female"}
//             onChange={(e) => this.setState({ radio: e.target.value })}
//           />
//           <label htmlFor="female">Female</label>
//           <br />
//           <button>ADD</button>
//         </form>
//       </>
//     );
//   }
// }

export default function PRACTICE() {
  const [check, setCheck] = useState(false);
  const [radio, setRadio] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log(check, radio);
    setCheck("");
    setRadio("");
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="checkbox"
          checked={check}
          id="checked"
          onChange={(e) => setCheck(e.target.checked)}
        />
        <label htmlFor="checked">Check ME!!!</label>
        <br />
        <br />
        <input
          type="radio"
          id="male"
          value="Male"
          checked={radio === "Male"}
          onChange={(e) => setRadio(e.target.value)}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="female"
          value="female"
          checked={radio === "female"}
          onChange={(e) => setRadio(e.target.radio)}
        />
        <label htmlFor="female">Female</label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
