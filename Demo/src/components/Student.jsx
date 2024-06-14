import { Component } from "react";

export default class Student extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount calling");

    alert("component will unmount");
  }
  render() {
    return (
      <div>
        <h1>Student Component</h1>
      </div>
    );
  }
}
