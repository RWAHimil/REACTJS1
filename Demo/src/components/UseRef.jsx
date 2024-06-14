import { useRef } from "react";
import "./ref.css";

export default function UseRef() {
  let input = useRef();
  let input1 = useRef();

  
  const handleInput = (ref) => {
    ref.current.style.color = "red";
    ref.current.focus();
  };

  const hh = (ref1) => {
    ref1.current.style.backgroundColor = "blue";
    // ref1.current.classList.add("hh");
    ref1.current.classList.remove("hh");
  };

  return (
    <>
      <h2>useRef Hook</h2>
      <input type="text" ref={input} />
      <button onClick={() => handleInput(input)}> CLick Me From useRef</button>

      <h2 ref={input1} className="hh">
        World !!!!!!
      </h2>
      <button onClick={() => hh(input1)}> Click me </button>
    </>
  );
}

// import React from 'react';

// class MultiElementExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputRef1 = React.createRef();
//     this.inputRef2 = React.createRef();
//   }

//   handleFocus(ref) {
//     ref.current.focus();
//   }

//   render() {
//     return (
//       <div>
//         <input ref={this.inputRef1} type="text" />
//         <button onClick={() => this.handleFocus(this.inputRef1)}>Focus Input 1</button>

//         <input ref={this.inputRef2} type="text" />
//         <button onClick={() => this.handleFocus(this.inputRef2)}>Focus Input 2</button>
//       </div>
//     );
//   }
// }

// export default MultiElementExample;
