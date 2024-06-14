// import { useState } from "react";

// export default function UseState() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [checked, setChecked] = useState(false);
//   const [radio, setRadio] = useState("");

//   const handleForm = (e) => {
//     e.preventDefault();
//     console.log(name, age, checked, radio);
//     setName("");
//     setAge("");
//     setChecked(false);
//     setRadio("");
//   };

//   return (
//     <>
//       <h1>UseState</h1>
//       <form onSubmit={handleForm}>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <br />
//         <input
//           type="number"
//           placeholder="Enter Age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//         <br />
//         <br />
//         <input
//           type="checkbox"
//           checked={checked}
//           onChange={(e) => setChecked(e.target.checked)}
//         />
//         <label>Check me!</label>
//         <br />
//         <br />
//         <input
//           type="radio"
//           name="radio"
//           value="male"
//           id="male"
//           checked={radio === "male"}
//           onChange={(e) => setRadio(e.target.value)}
//         />
//         <label htmlFor="male">Male</label>
//         <br />
//         <input
//           type="radio"
//           name="radio"
//           value="female"
//           checked={radio === "female"}
//           onChange={(e) => setRadio(e.target.value)}
//         />
//         <label>Female</label>
//         <br />
//         <br />
//         <button>Add</button>
//       </form>
//     </>
//   );
// }

// Class Component
import { Component } from "react";

class UseState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      checked: false,
      radio: ""
    };
  }

  handleForm = (e) => {
    e.preventDefault();
    console.log(
      this.state.name,
      this.state.age,
      this.state.checked,
      this.state.radio
    );
    this.setState({
      name: "",
      age: "",
      checked: false,
      radio: ""
    });
  };

  render() {
    return (
      <>
        <h1>Class Component</h1>
        <form onSubmit={this.handleForm}>
          <input
            type="text"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Enter Age"
            value={this.state.age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
          <br />
          <br />
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={(e) => this.setState({ checked: e.target.checked })}
          />
          <label>Check me!</label>
          <br />
          <br />
          <input
            type="radio"
            name="radio"
            value="male"
            id="male"
            checked={this.state.radio === "male"}
            onChange={(e) => this.setState({ radio: e.target.value })}
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            type="radio"
            name="radio"
            value="female"
            checked={this.state.radio === "female"}
            onChange={(e) => this.setState({ radio: e.target.value })}
          />
          <label>Female</label>
          <br />
          <br />
          <button>Add</button>
        </form>
      </>
    );
  }
}

export default UseState;
