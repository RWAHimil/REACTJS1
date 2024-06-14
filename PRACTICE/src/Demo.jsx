import { Component } from "react";

export default class Demo extends Component {
  constructor() {
    super();
    this.state = {
      name: "XYZ",
      age: 25
    };
  }

  handleAge = () => {
    this.setState({
      age: 30
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
        <button
          onClick={() =>
            this.setState({
              name: "TEST"
            })
          }
        >
          Change
        </button>
        <button onClick={this.handleAge}>Change Age</button>
      </div>
    );
  }
}
