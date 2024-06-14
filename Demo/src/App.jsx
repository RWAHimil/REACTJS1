// import { Component } from "react";
// import "./App.css";
// import Student from "./components/Student";
// import UseState from "./components/UseState";
// import ArrayUseState from "./components/ArrayUseState";
// import ObjectUseState from "./components/ObjectUseState";
// import UseEffect from "./components/UseEffect";
// import USeEffectLC from "./components/USeEffectLC";

// export default class App extends Component {
//   constructor() {
//     console.log("constructor called");
//     super();

//     this.state = {
//       show: true,
//       message: "Hello"
//     };
//   }

//   componentDidMount() {
//     console.log("componentDidMount calling");
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate called");
//   }

//   render() {
//     console.log("Render Calling");

//     return (
//       <>
//         {this.state.message}
//         <br />
//         {this.state.show ? <Student /> : <h1>Student Component Removed</h1>}

//         <br />
//         <button onClick={() => this.setState({ message: "Hello Removed" })}>
//           State Change
//         </button>

//         <button onClick={() => this.setState({ show: !this.state.show })}>
//           Toggle
//         </button>

//         <br />
//         <br />

//         <UseState />
//         <hr />
//         <h1>Array in useState</h1>
//         <ArrayUseState />
//         <hr />
//         <h1>Objects in useState</h1>
//         <ObjectUseState />
//         <hr />
//         <h1>Window Resize using useEffect</h1>
//         <UseEffect />
//         <hr />
//         <USeEffectLC />
//       </>
//     );
//   }
// }
// import { useState } from "react";
// import USeEffectLC from "./components/USeEffectLC";
// import AgeValidation from "./components/AgeValidation";
// import Style from "./Demo1.module.css";
// import List from "./components/List";
// import Ref from "./components/Ref";
// import UseRef from "./components/UseRef";
// import ClassControlled from "./components/ClassControlled";
// import FormArrayObj from "./components/FormArrayObj";
// import FormHandling from "./components/FormHandling";
// import Formvalidation from "./components/Formvalidation";
// import FunctionalControlledUncontrolled from "./components/FunctionalControlledUncontrolled";
import "./App.css";
// import Props from "./components/Props";
// import Boottsrap from "./components/Boottsrap";
// import Button from "./components/Button";
// import ChildtoParent from "./components/ChildtoParent";
// import Counter from "./redux/Counter";
// import ObjectUseState from "./components/ObjectUseState";
// import ArrObjForm from "./components/ArrObjForm";
// import ListComponent from "./components/ListComponent";
import HOC from "./components/HOC";
import { HOCofSampleComponent } from "./components/HOC";
// import Higher from "./components/Higher";
// import Home from "./components/Home";

// function getData(data) {
//   console.log(data);
// }

export default function App() {
  // const [state, setState] = useState(true);
  // const name = "Captain America";
  // const company = "Shield";
  return (
    <>
      {/* <ObjectUseState />
      <hr />
      <ArrObjForm /> */}
      {/* {state ? <USeEffectLC /> : ""}
      <button onClick={() => setState(!state)}>Toggle</button>

      <AgeValidation />
      <h1 className={Style.h1}>App Component</h1>

      <hr />
      <List />
      <hr />
      <hr />
      <Ref />
      <hr />
      <hr />
      <UseRef /> */}

      {/* <hr />
      <hr />
      <ClassControlled />
      <hr />
      <hr />
      <FunctionalControlledUncontrolled />
      <hr />
      <hr />
      <FormHandling />
      <br />
      <br />
      <hr />
      <Formvalidation /> */}
      {/* <br />
      <hr />
      <br />
      <br />
      <br />
    <ArrObjForm /> */}
      <HOC />
      <HOCofSampleComponent name="Himil" age="25" address="Ahmedabad" />
      <HOCofSampleComponent name="Raj" age="22" address="Mumbai" />
      <HOCofSampleComponent name="Yuvraj" age="23" address="Pune" />
      <HOCofSampleComponent name="Bapu" age="25" address="Chapa" />
      {/* <hr />
      <hr />
      <br />
      <Button />
      <br />
      <Higher />
      <br />
      <Home age="25" />
      
      <br />
      <br />
      <hr />
    <Boottsrap /> */}

      {/* <ChildtoParent getData={getData} /> */}
      {/* <Counter />
      <Props name={name} company={company} /> */}
      {/* <hr />
      <hr />
      <FormArrayObj />
      <hr />
      <hr />
      <ListComponent /> */}
    </>
  );
}
