import { Component, createRef } from "react";

export default class Ref extends Component {
  constructor() {
    super();

    this.input = createRef();
  }

  // componentDidMount() {
  //   console.log((this.input.current.value = 1000));
  // }

  getVal = () => {
    console.log(this.input.current.value);
    this.input.current.style.color = "red";
    this.input.current.style.backgroundColor = "salmon";
  };

  Hii = () => {
    this.input.current.style.color = "blue";
  };
  render() {
    console.log(this.input);

    return (
      <>
        <button onClick={() => this.Hii()}>HIII</button>

        <h1 ref={this.input}>HIIIIIIII</h1>
        <input type="text" ref={this.input} />

        <button onClick={() => this.getVal()}>Click Me</button>
      </>
    );
  }
}
