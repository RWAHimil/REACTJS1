import { Component, createRef } from "react";

export default class ClassControlled extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
    this.inputRef1 = createRef();
  }

  handleForm = (e) => {
    e.preventDefault();
    console.log(this.inputRef.current.value);
    console.log(this.inputRef1.current.value);
  };

  render() {
    return (
      <>
        <h2>Uncontrolled Component Using Class Component</h2>
        <form action="" onSubmit={(e) => this.handleForm(e)}>
          <input type="text" ref={this.inputRef} />
          <br />
          <br />
          <input type="email" ref={this.inputRef1} />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

// import { Component } from "react";

// export default class ClassControlled extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: ""
//     };
//   }

//   handleForm = (event) => {
//     event.preventDefault();
//     console.log(this.state.name);
//   };
//   render() {
//     return (
//       <>
//         <h2>Controlled Component Using Class Component</h2>
//         <form action="" onClick={(event) => this.handleForm(event)}>
//           <input
//             type="text"
//             onChange={(e) => this.setState({ name: e.target.value })}
//             value={this.state.name}
//           />
//           <br />
//           <br />
//           <button>Submit</button>
//         </form>
//       </>
//     );
//   }
// }
